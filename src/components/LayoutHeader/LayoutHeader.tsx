import { memo } from 'react';
import type { FC, ReactNode } from 'react';
import { ColorPicker } from 'antd';
import type { Color } from 'antd/es/color-picker';
import { AlertFilled, AlertOutlined } from '@ant-design/icons';

import { useAppDispatch, useAppSelector, useAppShallowEqual } from '@/store';
import { changeIsDarkReducer, changeThemeColorReducer } from '@/store/modules/main';
import { debounce } from '@/utils/timing';

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
  return (
    <div>
      <span onClick={onChangeDark}>
        {isDark ? <AlertOutlined style={{ fontSize: '18px' }} /> : <AlertFilled style={{ fontSize: '18px' }} />}
      </span>
      <ColorPicker size="small" value={themeColor} onChange={(color) => onChangeThemeColor(color)} />
    </div>
  );
};

export default memo(LayoutHeader);
