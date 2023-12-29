import { memo } from 'react';
import type { FC, ReactNode } from 'react';
import { Layout, theme } from 'antd';
import { Outlet } from 'react-router-dom';
import { Content } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';

import LayoutContentWrapper from './style';
import AuthRouter from '@/components/AuthRouter/AuthRouter';
import { useAppSelector, useAppShallowEqual } from '@/store';
import LayoutHeader from '../LayoutHeader/LayoutHeader';
import LayoutSider from '../LayoutSider/LayoutSider';

const { Header } = Layout;

interface IProps {
  children?: ReactNode;
}
/**
 * 主页面内容
 */
const LayoutContent: FC<IProps> = () => {
  const {
    token: { colorBgContainer }
  } = theme.useToken();
  const { menuList, firstRouter } = useAppSelector((state) => state.main, useAppShallowEqual);
  return (
    <AuthRouter>
      <LayoutContentWrapper>
        <Layout>
          <Sider style={{ background: colorBgContainer }}>
            <LayoutSider menuList={menuList} firstRouter={firstRouter} />
          </Sider>
          <Layout>
            <Header style={{ background: colorBgContainer }}>
              <LayoutHeader />
            </Header>
            <Content style={{ background: colorBgContainer }}>
              <Outlet />
            </Content>
          </Layout>
        </Layout>
      </LayoutContentWrapper>
    </AuthRouter>
  );
};

export default memo(LayoutContent);
