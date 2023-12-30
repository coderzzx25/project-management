import { memo } from 'react';
import type { FC, ReactNode } from 'react';

interface IProps {
  children?: ReactNode;
}

const message: FC<IProps> = () => {
  return <div>message</div>;
};

export default memo(message);
