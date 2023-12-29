import { RouteObject, Navigate, useRoutes } from 'react-router-dom';
import { loadLocalRoutes } from './utils/mapRouter';
import Login from '@/views/login/login';
import NotFound from '@/views/notfound/notfound';

const metaRouters = loadLocalRoutes();

// 路由配置
const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/login" />
  },
  {
    path: '/login',
    element: <Login />
  },
  ...metaRouters,
  {
    path: '*',
    element: <NotFound />
  }
];

const Router = () => {
  const route = useRoutes(routes);
  return route;
};
export default Router;
