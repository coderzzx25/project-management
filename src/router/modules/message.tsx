import { lazy, LazyExoticComponent, NamedExoticComponent } from 'react';
import LayoutContent from '@/components/LayoutContent/LayoutContent';
import lazyLoad from '../utils/lazyLoad';

const Message: LazyExoticComponent<NamedExoticComponent<any>> = lazy(() => import('@/views/message/message'));

const messageRouter = [
  {
    element: <LayoutContent />,
    children: [
      {
        path: '/message/message',
        element: lazyLoad(Message)
      }
    ]
  }
];

export default messageRouter;
