import { memo } from 'react';
import type { FC, ReactNode } from 'react';

interface IProps {
  children?: ReactNode;
}

const employee: FC<IProps> = () => {
  return <div>employee</div>;
};

export default memo(employee);
