import { RouteObject } from 'react-router-dom';
import { IRoutes } from '@/global/type';
// 加载本地路由
export const loadLocalRoutes = () => {
  const modules: Record<string, any> = import.meta.glob('../modules/**/*.tsx', { eager: true });

  const routes: RouteObject[] = [];

  Object.keys(modules).forEach((item) => {
    Object.keys(modules[item]).forEach((key: any) => {
      routes.push(...modules[item][key]);
    });
  });

  return routes;
};

/**
 * 获取第一个路由
 * @param menuList 路由列表
 * @returns 第一个路由
 */
export const getFirstPath = (menuList: IRoutes[]) => {
  let firstPath = '';
  for (let i = 0; i < menuList.length; i++) {
    const item = menuList[i];
    if (item.children && item.children.length > 0) {
      firstPath = getFirstPath(item.children);
      if (firstPath) break;
    } else {
      firstPath = item.path;
      break;
    }
  }
  return firstPath;
};
