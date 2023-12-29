import { lazy, LazyExoticComponent, NamedExoticComponent } from 'react';
import LayoutContent from '@/components/LayoutContent/LayoutContent';
import lazyLoad from '../utils/lazyLoad';

const About: LazyExoticComponent<NamedExoticComponent<any>> = lazy(() => import('@/views/about/about'));

const aboutRouter = [
  {
    element: <LayoutContent />,
    children: [
      {
        path: '/about/about',
        element: lazyLoad(About)
      }
    ]
  }
];

export default aboutRouter;
