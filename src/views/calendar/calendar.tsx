import { memo } from 'react';
import type { FC, ReactNode } from 'react';

interface IProps {
  children?: ReactNode;
}

const calendar: FC<IProps> = () => {
  return <div>calendar</div>;
};

export default memo(calendar);
