import { memo } from 'react';
import { FC, ReactNode } from 'react';
import { ConfigProvider, theme } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';

import Router from '@/router';
import { useAppSelector, useAppShallowEqual } from './store';

interface IProps {
  children?: ReactNode;
}

const App: FC<IProps> = () => {
  const { isDark, themeColor } = useAppSelector((state) => state.main, useAppShallowEqual);

  return (
    <ConfigProvider
      theme={{
        algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
        token: {
          colorPrimary: themeColor
        }
      }}
      locale={zhCN}
    >
      <Router />
    </ConfigProvider>
  );
};

export default memo(App);
