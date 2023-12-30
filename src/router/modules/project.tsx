import { lazy, LazyExoticComponent, NamedExoticComponent } from 'react';
import LayoutContent from '@/components/LayoutContent/LayoutContent';
import lazyLoad from '../utils/lazyLoad';

const Project: LazyExoticComponent<NamedExoticComponent<any>> = lazy(() => import('@/views/project/project'));

const projectRouter = [
  {
    element: <LayoutContent />,
    children: [
      {
        path: '/project/project',
        element: lazyLoad(Project)
      }
    ]
  }
];

export default projectRouter;
