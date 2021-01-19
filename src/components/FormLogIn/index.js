import { Form, Input, Button } from 'antd';


const formItemLayout = {
  labelCol: {
    xs: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 8,
    }
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

export default function NormalLoginForm() {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <div className="login-form-wrapper">
      <Form
        {...formItemLayout}
        name="normal_login"
        size='large'
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        
        <Form.Item
          name="email"
          label='E-mail'
          rules={[
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ]}
          
        >
          <Input type='email' />
        </Form.Item>
        <Form.Item
          name="password"
          label='Password'
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" className="login-form-button" style={{marginRight: '20px'}}>
            Log in
          </Button>
          Or <a href="">register now!</a>
        </Form.Item>
      </Form>
    </div>
  );
};