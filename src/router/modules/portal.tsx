import { lazy, LazyExoticComponent, NamedExoticComponent } from 'react';
import LayoutContent from '@/components/LayoutContent/LayoutContent';
import lazyLoad from '../utils/lazyLoad';

const Portal: LazyExoticComponent<NamedExoticComponent<any>> = lazy(() => import('@/views/portal/portal'));

const portalRouter = [
  {
    element: <LayoutContent />,
    children: [
      {
        path: '/portal/portal',
        element: lazyLoad(Portal)
      }
    ]
  }
];

export default portalRouter;
