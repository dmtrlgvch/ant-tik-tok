import { Card, Avatar, Tooltip } from 'antd';
import { HeartOutlined, CommentOutlined, ShareAltOutlined } from '@ant-design/icons';

const { Meta } = Card;

export default function Post() {

  const loading = false

  return (
    <Card
      loading={loading}
      hoverable
      style={{ width: 300 }}
      cover={
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      }
      actions={[
        <HeartOutlined  key="like" />,
        <CommentOutlined key="comment" />,
        <Tooltip title='Copy link'>
          <ShareAltOutlined key="share" />
        </Tooltip>
      ]}
    >
      <Meta
        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
        title="Card title"
        description="This is the description"
      />
    </Card>
  )
}