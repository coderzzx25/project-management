import { memo } from 'react';
import type { FC, ReactNode } from 'react';
import { Avatar, Button, ColorPicker, Dropdown, Input, Space } from 'antd';
import type { Color } from 'antd/es/color-picker';
import { AlertFilled, AlertOutlined, DownOutlined, SearchOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';

import { useAppDispatch, useAppSelector, useAppShallowEqual } from '@/store';
import { changeIsDarkReducer, changeThemeColorReducer } from '@/store/modules/main';
import { debounce } from '@/utils/timing';
import LoayoutHeaderWrapper from './style';

interface IProps {
  children?: ReactNode;
}

const LayoutHeader: FC<IProps> = () => {
  const dispatch = useAppDispatch();
  const { isDark, themeColor } = useAppSelector((state) => state.main, useAppShallowEqual);
  // 修改主题颜色,需要使用防抖,不然会导致页面卡顿
  const onChangeThemeColor = debounce((color: Color) => {
    dispatch(changeThemeColorReducer(color.toHexString()));
  });
  // 修改主题模式
  const onChangeDark = () => {
    dispatch(changeIsDarkReducer(!isDark));
  };

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: '个人中心'
    }
  ];
  return (
    <LoayoutHeaderWrapper>
      <div className="search">
        <Input placeholder="搜索" prefix={<SearchOutlined />} />
      </div>
      <div className="user">
        <Button
          onClick={onChangeDark}
          icon={isDark ? <AlertOutlined style={{ fontSize: '18px' }} /> : <AlertFilled style={{ fontSize: '18px' }} />}
          className="operate"
          size="small"
        ></Button>
        <ColorPicker
          value={themeColor}
          onChange={(color) => onChangeThemeColor(color)}
          className="operate"
          size="small"
        />
        <Dropdown menu={{ items }}>
          <Space>
            <Avatar size={32} icon={<UserOutlined />} />
            <span>coderzzx</span>
            <DownOutlined />
          </Space>
        </Dropdown>
      </div>
    </LoayoutHeaderWrapper>
  );
};

export default memo(LayoutHeader);
