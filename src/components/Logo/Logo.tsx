import { memo } from 'react';
import type { FC, ReactNode } from 'react';
import LogoWrapper from './style';

interface IProps {
  children?: ReactNode;
  themeColor?: string;
}

const Logo: FC<IProps> = ({ themeColor }) => {
  return <LogoWrapper style={{ background: themeColor }}>X</LogoWrapper>;
};

export default memo(Logo);
