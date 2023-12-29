import { ReactNode, createElement } from 'react';
import type { MenuProps } from 'antd';
import * as Icons from '@ant-design/icons';
import { IRoutes } from '@/global/type';

type MenuItem = Required<MenuProps>['items'][number];

// 处理antd menu的数据
export const getItem = (
  label: ReactNode,
  key: React.Key,
  icon?: ReactNode,
  children?: MenuItem[],
  type?: 'group'
): MenuItem => {
  return {
    key,
    label,
    icon,
    children,
    type
  };
};

// 处理antd icon的数据
const customIcons: { [key: string]: any } = Icons;
export const getIcon = (icon: string) => {
  return createElement(customIcons[icon]);
};

// 处理menu的数据
export const getMenuData = (data: IRoutes[]): MenuItem[] => {
  return data.map((item: IRoutes) => {
    if (item.children) {
      return getItem(item.title, item.path, getIcon(item.icon), getMenuData(item.children), 'group');
    }
    return getItem(item.title, item.path, getIcon(item.icon));
  });
};
