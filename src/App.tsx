import { memo } from 'react';
import { FC, ReactNode } from 'react';
import { ConfigProvider, theme } from 'antd';

import Router from '@/router';
import { useAppSelector, useAppShallowEqual } from './store';

interface IProps {
  children?: ReactNode;
}

const App: FC<IProps> = () => {
  const { isDark, themeColor } = useAppSelector((state) => state.main, useAppShallowEqual);
  const {
    token: { colorBgContainer }
  } = theme.useToken();
  return (
    <ConfigProvider
      theme={{
        algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
        token: {
          colorPrimary: themeColor,
          colorBgContainer: isDark ? '#1f2328' : colorBgContainer
        }
      }}
    >
      <Router />
    </ConfigProvider>
  );
};

export default memo(App);
