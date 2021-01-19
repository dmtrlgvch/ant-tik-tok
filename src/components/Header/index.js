import './index.css'

import { Layout, Menu, Dropdown, Button, Tooltip } from 'antd';
import { UserOutlined, CloudUploadOutlined } from '@ant-design/icons';

const { Header } = Layout;

export default function HeaderTemplate() {

  return (
    <Header className='header'>

        <a className='logo' href='/'>
          Fellow
        </a>

        <div className='nav-controls'>
          <Button className='btn_log-in' type="primary">Log in</Button>
          <Button className='btn_sign-in' type="primary">Sign in</Button>
          
          <Tooltip title='Upload video' placement="bottom">
            <Button className='upload-btn' shape="circle" size='large' icon={<CloudUploadOutlined />} />
          </Tooltip>
          
          <Dropdown overlay={UserMenu} placement="bottomRight">
            <Button shape="circle" size='large' icon={<UserOutlined />} />
          </Dropdown>
        </div>

    </Header>
  )
}

function UserMenu() {

  return (
    <Menu>
      <Menu.Item >
        <a className='menu-link' rel="noopener noreferrer" href="#">
          View profile
        </a>
      </Menu.Item>
      <Menu.Item>
        <a className='menu-link' rel="noopener noreferrer" href="#">
          Log out
        </a>
      </Menu.Item>
    </Menu>
  )
}
