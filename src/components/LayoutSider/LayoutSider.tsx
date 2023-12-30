import { memo } from 'react';
import type { FC, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Col, Menu, Row, Typography } from 'antd';
import type { MenuProps } from 'antd';
import { LoginOutlined } from '@ant-design/icons';

import { IRoutes } from '@/global/type';
import { getMenuData } from '@/utils/antmenu';
import LayoutContentWrapper from './style';
import Logo from '../Logo/Logo';
import { useAppSelector, useAppShallowEqual } from '@/store';
import OnlineSupport from '../OnlineSupport/OnlineSupport';

const { Text } = Typography;

interface IProps {
  children?: ReactNode;
  menuList: IRoutes[];
  firstRouter: string;
}

const LayoutSider: FC<IProps> = ({ menuList, firstRouter }) => {
  const navigate = useNavigate();
  const { themeColor } = useAppSelector((state) => state.main, useAppShallowEqual);
  // 处理antd menu的数据
  const items = getMenuData(menuList);
  // 路由跳转
  const onClickPushRouter: MenuProps['onClick'] = (e) => {
    navigate(e.key);
  };
  // 退出登录
  const onClickLoginOut = () => {
    // TODO: 由于使用的是redux-persist，暂时没有找到清除本地存储的方法，后面再研究
    // 清除本地存储
    localStorage.removeItem('persist:root');
    // 跳转登录页
    navigate('/login');
  };
  return (
    <LayoutContentWrapper>
      <Row>
        <Col span={24}>
          <div className="logo">
            <Logo themeColor={themeColor} />
            <Text>项目管理</Text>
          </div>
        </Col>
        <Col span={24}>
          <Menu onClick={onClickPushRouter} defaultSelectedKeys={[firstRouter]} mode="inline" items={items} />
        </Col>
      </Row>
      <Row className="sider-buttom">
        <Col span={24}>
          <OnlineSupport />
        </Col>
        <Col span={24} className="login-out">
          <Button onClick={onClickLoginOut} block icon={<LoginOutlined />} type="text">
            退出登录
          </Button>
        </Col>
      </Row>
    </LayoutContentWrapper>
  );
};

export default memo(LayoutSider);
