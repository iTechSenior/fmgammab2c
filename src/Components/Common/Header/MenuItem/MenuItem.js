import React from 'react'
import './MenuItem.css'
import * as MenuItemStyle from './MenuItem.module.scss'

const MenuItem = props => {
  const handleClick = () => {
    props.onClick()
  }

  const styles = {
    mainWrapper: {
      opacity: 0,
      animation: '1s appear forwards',
      animationDelay: props.delay,
    },
  }

  return (
    <div
      className={MenuItemStyle.menuItemWrapper}
      style={styles.mainWrapper}
      onClick={() => handleClick()}
    >
      {props.children}
    </div>
  )
}

export default MenuItem
