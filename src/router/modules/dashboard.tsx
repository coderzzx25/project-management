import { lazy, LazyExoticComponent, NamedExoticComponent } from 'react';
import LayoutContent from '@/components/LayoutContent/LayoutContent';
import lazyLoad from '../utils/lazyLoad';

const Dashboard: LazyExoticComponent<NamedExoticComponent<any>> = lazy(() => import('@/views/dashboard/dashboard'));

const dashboardRouter = [
  {
    element: <LayoutContent />,
    children: [
      {
        path: '/dashboard/dashboard',
        element: lazyLoad(Dashboard)
      }
    ]
  }
];

export default dashboardRouter;
