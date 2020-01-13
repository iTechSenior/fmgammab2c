import React from 'react'
import { Icon } from 'antd'
import './ContactView.css'

const ContactView = () => {
  const styles = {
    mainWrapperStyle: {
      opacity: 0,
      animation: '1s appear forwards',
    },
  }

  return (
    <div className="contactViewWrapper" style={styles.mainWrapperStyle}>
      <div className="phoneView">
        {/* <Icon
          style={{ color: 'white', marginRight: 7 }}
          type="phone"
          theme="filled"
          rotate={90}
        /> */}
        <span>
          Advies nodig? Bel ons op{' '}
          <span style={{ color: 'black' }}>+32 488 69 04 86</span> | ma - vr
          09:00 tot
        </span>
      </div>
      <div className="contactInfoView">
        <span>E-bike info avonden Contact </span>
      </div>
    </div>
  )
}

export default ContactView
