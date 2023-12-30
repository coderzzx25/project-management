import { memo } from 'react';
import type { FC, ReactNode } from 'react';

interface IProps {
  children?: ReactNode;
}

const portal: FC<IProps> = () => {
  return <div>portal</div>;
};

export default memo(portal);
