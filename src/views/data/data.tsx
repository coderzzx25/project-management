import { memo } from 'react';
import type { FC, ReactNode } from 'react';

interface IProps {
  children?: ReactNode;
}

const data: FC<IProps> = () => {
  return <div>data</div>;
};

export default memo(data);
