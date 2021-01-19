import { Row, Col, Avatar, Button, Typography, Divider, Tabs, Card } from 'antd';


import './index.css';


const { TabPane } = Tabs;



export default function UserPage () {
  function callback(key) {
    console.log(key);
  }

  return (
    <div className='user-page'>
      <div className='user-page_header'>
        <div className='user-info'>
          <Avatar
            className='user-avatar'
            size={100}
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            alt="Han Solo"

          />

          <div className='user-info_links'>
            <a href='#' className='username'>User name</a>
            <a href='#' className='nickname'>User name</a>
            <Button size='large'>Subscribe</Button>
          </div>        
        </div>
        <Divider />
        <div className='user-count'>
          <div className='user-count_item'>
            <strong className='user-count_following'>14</strong>
            <span>Following</span>
          </div>
          <div className='user-count_item'>
            <strong className='user-count_followers'>88</strong>
            <span>Followers</span>
          </div>
          <div className='user-count_item'>
            <strong className='user-count_likes'>666</strong>
            <span>Likes</span>
          </div>         
        </div>
        <Divider />
        <Typography className='user-description'>Lorem some text</Typography>
        <Divider />

        <Tabs defaultActiveKey="1" centered onChange={callback}>
          <TabPane tab="Posts" key="1">
            <UserPostList />
          </TabPane>
          <TabPane tab="Likes" key="2">
            Content of Tab Pane 2
          </TabPane>
        </Tabs>
      </div>

    </div>
  )
}


function UserPostList () {
  const arr = [1, 2, 3, 4, 6, 6]

  return (
    <Row gutter={[8, 8]}>
      {arr.map(item => <Col span={8}>
        <Card className='user-page-post'
            hoverable
            bordered='false'
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        ></Card>
      </Col> )}
    </Row>
  )
}