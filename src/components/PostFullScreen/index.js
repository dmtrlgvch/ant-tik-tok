import { Row, Col, Avatar, Button, Typography, Divider, Tooltip  } from 'antd';
import { HeartOutlined, 
  CommentOutlined, 
  ShareAltOutlined, 
  CloseOutlined, 
  RightOutlined, 
  LeftOutlined,
} from '@ant-design/icons';

import './index.css';
import CommentList from '../CommentList'
import CommentFormInput from '../CommentFormInput'

const { Paragraph } = Typography;


export default function PostFullScreen() {

  return (
    <div className='post-full-screen'>
      <Row>
        <Col xs={24} md={16}>
          <div className='post-content'>
            <Button className='btn-close-post' size='large' shape="circle" icon={<CloseOutlined />} />
            <Button className='btn-next-post' size='large' shape="circle" icon={<RightOutlined />} />
            <Button className='btn-prev-post' size='large' shape="circle" icon={<LeftOutlined />} />
            <img className='post-img' src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" alt='post'></img>
          </div>
        </Col>
        <Col xs={24} md={8}>
          <div className='post-info-container'>
            <div className='post-header'>
              <div className='user-info'>
                <Avatar
                  className='user-avatar'
                  size={60}
                  src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                  alt="Han Solo"
                />

                <div className='user-info-links-container'>
                  <a href='#' className='user-username'>User name</a>
                  <a href='#' className='user-nickname'>User name</a>
                </div>
              </div>  

              <Button size='large'>Subscribe</Button>
            </div>

            <Divider />

            <Paragraph className='post-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Paragraph>
            <Divider />
            <div className='post-action-container'>
              <div className='like-action'>
                <Button className='like-btn' size='large' shape="circle" icon={<HeartOutlined />} />
                <strong className='like-amount'>133</strong>
              </div>
              <div className='comment-action'>
                <Button className='comment-btn' size='large' shape="circle" icon={<CommentOutlined />} />
                <strong className='comment-amount'>33</strong>
              </div>
              <div className='share-action'>
                <Tooltip title='Copy link'>
                  <Button size='large' shape="circle" icon={<ShareAltOutlined />} />
                </Tooltip>
              </div>
            </div>
            <Divider />

            <CommentList />
            <CommentFormInput />

          </div>
        </Col>
      </Row>
    </div>
  )
}