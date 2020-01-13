import React from 'react'
import './HamburgerMenuButton.css'
import * as HamburgerMenuStyle from './HamburgerMenuButton.module.scss'

const HamburgerMenuButton = props => {
  const handleClick = () => {
    props.onClick()
  }
  return (
    <div
      className={HamburgerMenuStyle.hamMenuBtnWrapper}
      onClick={() => handleClick()}
    >
      <div
        className={`hamMenuBtnLine_default_first ${
          props.menuOpen ? HamburgerMenuStyle.hamMenuBtnLine_first : ''
        }`}
      />
      <div
        className={`hamMenuBtnLine_default_second ${
          props.menuOpen ? HamburgerMenuStyle.hamMenuBtnLine_second : ''
        }`}
      />
      <div
        className={`hamMenuBtnLine_default_third ${
          props.menuOpen ? HamburgerMenuStyle.hamMenuBtnLine_third : ''
        }`}
      />
    </div>
  )
}

export default HamburgerMenuButton
