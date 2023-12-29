import { memo } from 'react';
import type { FC, ReactNode } from 'react';

interface IProps {
  children?: ReactNode;
}

const about: FC<IProps> = () => {
  return <div>about</div>;
};

export default memo(about);
