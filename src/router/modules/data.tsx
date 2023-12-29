import { lazy, LazyExoticComponent, NamedExoticComponent } from 'react';
import LayoutContent from '@/components/LayoutContent/LayoutContent';
import lazyLoad from '../utils/lazyLoad';

const Data: LazyExoticComponent<NamedExoticComponent<any>> = lazy(() => import('@/views/data/data'));

const data = [
  {
    element: <LayoutContent />,
    children: [
      {
        path: '/data/data',
        element: lazyLoad(Data)
      }
    ]
  }
];

export default data;
