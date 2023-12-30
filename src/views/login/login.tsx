import { memo } from 'react';
import type { FC, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Checkbox, Col, Form, Image, Input, Row, message } from 'antd';

import LoginWrapper from './style';
import { userLogin, menuList } from '@/service/modules';
import { useAppDispatch, useAppSelector, useAppShallowEqual } from '@/store';
import {
  changeUserInfoReducer,
  changeTokenReducer,
  changeMenuListReducer,
  changeFirstRouterReducer
} from '@/store/modules/main';
import { getFirstPath } from '@/router/utils/mapRouter';
import loginImg from '@/assets/images/login-img.png';

interface ILoginInfo {
  username: string;
  password: string;
  remember: boolean;
}

interface IProps {
  children?: ReactNode;
}

const login: FC<IProps> = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { themeColor } = useAppSelector((state) => state.main, useAppShallowEqual);
  const onClickLogin = async (value: ILoginInfo) => {
    try {
      const loginInfo = await userLogin(value);
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
      message.error(error as string);
    }
  };
  return (
    <LoginWrapper>
      <div className="login-left" style={{ background: themeColor }}>
        <div className="content">
          <h1>公司项目管理</h1>
          <p>公司项目管理系统</p>
          <Image src={loginImg} preview={false} />
        </div>
      </div>

      <div className="login-right">
        <Row gutter={30} className="right-row">
          <Col span={24}>
            <h2>欢迎登录</h2>
          </Col>
          <Form
            onFinish={onClickLogin}
            initialValues={{ username: 'admin', password: '123456', remember: true }}
            layout="vertical"
            size="large"
          >
            <Col span={24}>
              <Form.Item<ILoginInfo>
                label="账户"
                name="username"
                rules={[{ required: true, message: '没有账户怎么怎么登录' }]}
              >
                <Input placeholder="默认账户admin" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item<ILoginInfo>
                label="密码"
                name="password"
                rules={[{ required: true, message: '没有密码怎么登录' }]}
              >
                <Input.Password placeholder="默认密码123456" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <div className="remmeber">
                <Form.Item<ILoginInfo> name="remember" valuePropName="checked">
                  <Checkbox>记住我</Checkbox>
                </Form.Item>
                <Form.Item>
                  <span className="forget-password">忘记密码?</span>
                </Form.Item>
              </div>
            </Col>
            <Col span={24}>
              <Button type="primary" htmlType="submit" block>
                立即登录
              </Button>
            </Col>
            <Col span={24}>
              <Form.Item className="account-item" style={{ color: themeColor }}>
                <span>还没有账户?</span>
                <span className="register">去注册</span>
              </Form.Item>
            </Col>
          </Form>
        </Row>
      </div>
    </LoginWrapper>
  );
};

export default memo(login);
