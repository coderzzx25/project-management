import { lazy, LazyExoticComponent, NamedExoticComponent } from 'react';
import LayoutContent from '@/components/LayoutContent/LayoutContent';
import lazyLoad from '../utils/lazyLoad';

const Holiday: LazyExoticComponent<NamedExoticComponent<any>> = lazy(() => import('@/views/holiday/holiday'));

const holidayRouter = [
  {
    element: <LayoutContent />,
    children: [
      {
        path: '/holiday/holiday',
        element: lazyLoad(Holiday)
      }
    ]
  }
];

export default holidayRouter;
