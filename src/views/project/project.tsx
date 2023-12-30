import { memo } from 'react';
import type { FC, ReactNode } from 'react';

interface IProps {
  children?: ReactNode;
}

const project: FC<IProps> = () => {
  return <div>project</div>;
};

export default memo(project);
