import React, { useState } from 'react'
import { Comment, Avatar, Form, Button, Input } from 'antd';

const { TextArea } = Input;



export default function CommentFormInput() {
  const [state, setState] = useState('')
 
  
  return (
    <>
      <Comment
        avatar={
          <Avatar
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            alt="Han Solo"
          />
        }
        content={
          <>
            <Form.Item>
              <TextArea rows={4} onChange={(e) => setState(e.target.value)} value={state} />
            </Form.Item>
            <Form.Item>
              <Button htmlType="submit" type="primary">
                Add Comment
              </Button>
            </Form.Item>
          </>
        }
      />
    </>
  ); 
}

