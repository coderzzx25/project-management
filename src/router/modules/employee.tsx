import { lazy, LazyExoticComponent, NamedExoticComponent } from 'react';
import LayoutContent from '@/components/LayoutContent/LayoutContent';
import lazyLoad from '../utils/lazyLoad';

const Employee: LazyExoticComponent<NamedExoticComponent<any>> = lazy(() => import('@/views/employee/employee'));

const employeeRouter = [
  {
    element: <LayoutContent />,
    children: [
      {
        path: '/employee/employee',
        element: lazyLoad(Employee)
      }
    ]
  }
];

export default employeeRouter;
