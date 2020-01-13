import React from 'react'
import { Button, Result } from 'antd'
import { navigate } from 'hookrouter'

export default function NotFound() {
  return (
    <div>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button
            onClick={() => {
              navigate('/')
            }}
            type="primary"
          >
            Back Home
          </Button>
        }
      />
    </div>
  )
}
