import { memo } from 'react';
import type { FC, ReactNode } from 'react';
import { Menu } from 'antd';
import type { MenuProps } from 'antd';

import { IRoutes } from '@/global/type';
import { getMenuData } from '@/utils/antmenu';
import { useNavigate } from 'react-router-dom';
import LayoutContentWrapper from './style';

interface IProps {
  children?: ReactNode;
  menuList: IRoutes[];
  firstRouter: string;
}

const LayoutSider: FC<IProps> = ({ menuList, firstRouter }) => {
  const navigate = useNavigate();
  // 处理antd menu的数据
  const items = getMenuData(menuList);
  // 路由跳转
  const onClick: MenuProps['onClick'] = (e) => {
    navigate(e.key);
  };
  return (
    <LayoutContentWrapper>
      <Menu onClick={onClick} defaultSelectedKeys={[firstRouter]} mode="inline" items={items} />
    </LayoutContentWrapper>
  );
};

export default memo(LayoutSider);
