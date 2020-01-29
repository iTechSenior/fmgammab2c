import React, { useState } from 'react'
import { Button, Icon, Modal } from 'antd'
import * as appConstants from '../../Utilities/AppConstants'
import * as FeedBackComponentStyle from './FeedBackComponent.module.scss'

export default function FeedBackComponent() {
  const [modalVisibility, setModalVisibility] = useState(false)

  return (
    <div>
      <Button
        shape="circle"
        style={{
          height: '110px',
          width: '110px',
          border: 'red 5px solid',
          background: `url(${appConstants.frontEndEnvURL}/icons/productOwner.svg) no-repeat center center`,
        }}
        type="link"
        onClick={() => setModalVisibility(true)}
      />

      <Modal
        className={FeedBackComponentStyle.modalContainer}
        visible={modalVisibility}
        footer={null}
        closeIcon={false}
        onCancel={() => setModalVisibility(false)}
      >
        <h1> LAAT JE BIJSTAAN DOOR ONZE MOUNTAINBIKE EXPERT</h1>
        <p>- Wat is mijn rij afstand?</p>
        <p>- Hoe vaak moet ik opladen?</p>
        <p>- Welke fiets is het best voor woon/ werk?</p>
        <Button type="primary">
          Doe beroep op Benny <Icon type="right" />
        </Button>
      </Modal>
    </div>
  )
}
