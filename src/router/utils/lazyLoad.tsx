import { Suspense, LazyExoticComponent, ReactNode } from 'react';
import { Spin } from 'antd';

/**
 * @description 路由懒加载
 * @param {Element} Component 需要访问的组件
 * @returns element
 */
const lazyLoad = (Component: LazyExoticComponent<any>): ReactNode => {
  return (
    <Suspense
      fallback={
        <Spin
          size="large"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%'
          }}
        />
      }
    >
      <Component />
    </Suspense>
  );
};

export default lazyLoad;
