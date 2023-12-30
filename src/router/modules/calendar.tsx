import { lazy, LazyExoticComponent, NamedExoticComponent } from 'react';
import LayoutContent from '@/components/LayoutContent/LayoutContent';
import lazyLoad from '../utils/lazyLoad';

const Calendar: LazyExoticComponent<NamedExoticComponent<any>> = lazy(() => import('@/views/calendar/calendar'));

const calendarRouter = [
  {
    element: <LayoutContent />,
    children: [
      {
        path: '/calendar/calendar',
        element: lazyLoad(Calendar)
      }
    ]
  }
];

export default calendarRouter;
