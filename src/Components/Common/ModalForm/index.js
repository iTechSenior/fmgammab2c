import React from 'react'
import { Form, Input, Button, Icon, message } from 'antd'
import FormItem from 'antd/lib/form/FormItem'

import * as FietsenMintjensAPI from '../../../api/FietsenMintjensAPI'

import './ModalForm.css'

const ModalForm = props => {
  const { getFieldDecorator } = props.form
  const key = 'updatable'

  const handleSubmit = e => {
    e.preventDefault()

    const form = props.form

    form.validateFields((err, values) => {
      if (!err) {
        values['bikeName'] = props.bikeName
        values['bikeUrl'] = props.bikeUrl
        values['formType'] = props.formType

        message.loading({ content: 'Sending the email...', key })

        FietsenMintjensAPI.submitEmail(values)
          .then(res => {
            if (res.data) {
              message.success({
                content: 'Successfully Sent!',
                key,
                duration: 2,
              })
              console.log('sending email', res.data)
            }
          })
          .catch(err => console.log('error', err))
      }
    })
  }

  return (
    <Form layout="vertical" onSubmit={e => handleSubmit(e)}>
      <p>
        {props.formType === 'Reserveer'
          ? 'Interesse in deze fiets? Reserveer hem volledig vrijblijvend den wij zetten hem voor jou klaar!'
          : 'Interesse in deze fites? Test hem volledig vrijblijvend uit en ontvang persoonlijk advies van onze expert. Reserveer je proefrit!'}
      </p>
      <FormItem label="Jouw naam">
        {getFieldDecorator('name', {
          rules: [
            {
              required: true,
              message: 'Please input your name!',
            },
          ],
        })(<Input placeholder="Name" />)}
      </FormItem>
      <FormItem label="Telefoonnummer">
        {getFieldDecorator('phoneNumber', {
          rules: [
            {
              required: true,
              message: 'Please input your phone number!',
            },
          ],
        })(<Input placeholder="Phone Number" />)}
      </FormItem>
      <FormItem label="Jouw email">
        {getFieldDecorator('email', {
          rules: [
            { type: 'email', message: 'The input is not valid E-mail' },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ],
        })(<Input placeholder="Email" />)}
      </FormItem>
      <Button type="primary" htmlType="submit">
        Verstuur <Icon type="right" />
      </Button>
    </Form>
  )
}

export default Form.create()(ModalForm)
