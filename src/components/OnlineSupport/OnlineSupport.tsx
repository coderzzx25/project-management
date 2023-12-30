import { MessageOutlined } from '@ant-design/icons';
import { Button, Image } from 'antd';
import { memo } from 'react';
import type { FC, ReactNode } from 'react';
import OnlineSupportWrapper from './style';
import illustration from '@/assets/images/illustration.png';

interface IProps {
  children?: ReactNode;
}

const OnlineSupport: FC<IProps> = () => {
  return (
    <OnlineSupportWrapper>
      <Image src={illustration} preview={false} className="online-img" />
      <Button type="primary" icon={<MessageOutlined />}>
        在线支持
      </Button>
    </OnlineSupportWrapper>
  );
};

export default memo(OnlineSupport);
