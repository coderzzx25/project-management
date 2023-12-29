import { useAppSelector, useAppShallowEqual } from '@/store';
import { memo } from 'react';
import type { FC } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

interface IProps {
  children?: JSX.Element;
}

/**
 * 权限路由
 * @param children 子组件
 * @returns
 */
const AuthRouter: FC<IProps> = ({ children }) => {
  // 获取token和权限路由
  const { token, menuList } = useAppSelector((state) => state.main, useAppShallowEqual);
  // 获取当前路由
  const { pathname } = useLocation();

  // 判断是否有token,没有则跳转到登录页
  if (!token) return <Navigate to="/login" />;

  // 将路由生成一维数组
  const routerList = menuList.map((item) => item.path);

  // 判断当前路由是否在权限路由中,没有则跳转到notfound页面
  if (!routerList.includes(pathname)) return <Navigate to="/notfound" />;

  return children;
};

export default memo(AuthRouter);
