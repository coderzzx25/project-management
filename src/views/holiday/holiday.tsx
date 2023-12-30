import { memo } from 'react';
import type { FC, ReactNode } from 'react';

interface IProps {
  children?: ReactNode;
}

const holiday: FC<IProps> = () => {
  return <div>holiday</div>;
};

export default memo(holiday);
