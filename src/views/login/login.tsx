import { memo } from 'react';
import type { FC, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

import { userLogin, menuList } from '@/service/modules';
import { useAppDispatch } from '@/store';
import {
  changeUserInfoReducer,
  changeTokenReducer,
  changeMenuListReducer,
  changeFirstRouterReducer
} from '@/store/modules/main';
import { getFirstPath } from '@/router/utils/mapRouter';

interface IProps {
  children?: ReactNode;
}

const login: FC<IProps> = () => {
  const userInfo = {
    username: 'admin',
    password: '123456'
  };
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const loginSubmit = async () => {
    try {
      const loginInfo = await userLogin(userInfo);
      if (!loginInfo) return;
      // 保存用户信息 -> redux
      dispatch(changeUserInfoReducer(loginInfo.userInfo));
      // 保存token -> redux
      dispatch(changeTokenReducer(loginInfo.token));
      // 获取用户权限路由
      const menuListInfo = await menuList();
      // 保存用户权限路由 -> redux
      dispatch(changeMenuListReducer(menuListInfo));
      // 获取用户权限第一个路由(需要和后端沟通指定固定模版防止获取不到路由)
      const firstPath = getFirstPath(menuListInfo);
      // 保存用户权限第一个路由 -> redux
      dispatch(changeFirstRouterReducer(firstPath));
      // 跳转到第一个路由
      navigate(firstPath);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>login</h1>
      <button onClick={loginSubmit}>login</button>
    </div>
  );
};

export default memo(login);
