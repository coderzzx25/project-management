import { memo, useEffect, useMemo } from 'react';
import { FC, ReactNode } from 'react';
import { ConfigProvider, theme } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';

import Router from '@/router';
import { useAppDispatch, useAppSelector, useAppShallowEqual } from './store';
import { changeIsDarkReducer } from './store/modules/main';

interface IProps {
  children?: ReactNode;
}

const App: FC<IProps> = () => {
  const dispatch = useAppDispatch();
  const { isDark, themeColor } = useAppSelector((state) => state.main, useAppShallowEqual);
  const {
    token: { colorBgContainer }
  } = theme.useToken();
  /**
   * 根据当前系统时间判断是否为夜间模式
   * 18:00 ~ 06:00 为夜间模式
   * 06:00 ~ 18:00 为白天模式
   * @returns boolean
   */
  const onDark = useMemo(() => {
    const hour = new Date().getHours();
    return hour >= 18 || hour < 6;
  }, []);

  useEffect(() => {
    if (onDark || isDark) {
      dispatch(changeIsDarkReducer(true));
    } else {
      dispatch(changeIsDarkReducer(false));
    }
  }, [onDark]);
  return (
    <ConfigProvider
      theme={{
        algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
        token: {
          colorPrimary: themeColor,
          colorBgContainer: isDark ? '#1f2328' : colorBgContainer
        }
      }}
      locale={zhCN}
    >
      <Router />
    </ConfigProvider>
  );
};

export default memo(App);
