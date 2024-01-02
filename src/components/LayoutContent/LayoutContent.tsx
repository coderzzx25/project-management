import { memo } from 'react';
import type { FC, ReactNode } from 'react';
import { Layout } from 'antd';
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
  const { menuList } = useAppSelector((state) => state.main, useAppShallowEqual);
  return (
    <AuthRouter>
      <LayoutContentWrapper>
        <Layout>
          <Sider>
            <LayoutSider menuList={menuList} />
          </Sider>
          <Layout>
            <Header>
              <LayoutHeader />
            </Header>
            <Content>
              <Outlet />
            </Content>
          </Layout>
        </Layout>
      </LayoutContentWrapper>
    </AuthRouter>
  );
};

export default memo(LayoutContent);
