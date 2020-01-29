import React from 'react'
import { Button } from 'antd'
import * as appConstants from '../AppConstants'
import ImageButtonStyle from './ImageButtonComponent.module.scss'
import './ImageButtonComponentStyle.css'
import { useMediaPredicate } from 'react-media-hook'

export default function ImageButtonComponent(props) {
  let imageType = props.imgBackgroundColor
    ? props.backgroundColor
    : props.imgSrc
  let buttonVisibility = props.buttonVisibility ? false : true
  const smallScreen = useMediaPredicate('(max-width: 490px)')

  return (
    <div
      className={ImageButtonStyle.imageButtonContainer}
      style={{
        height: props.height,
        width: props.width ? props.width : '100%',
        backgroundColor: props.imgBackgroundColor,
        backgroundImage: `url(${appConstants.frontEndEnvURL}/${imageType})`,
      }}
    >
      {props.imgBackgroundColor === '#EE3143' ? (
        <div style={{ width: '80%' }}>
          <p
            className={`${smallScreen ? ImageButtonStyle.smallPFont : ''}`}
            style={{ fontSize: 15, marginBottom: 0, marginLeft: 0 }}
          >
            {props.headerText}
          </p>
          <h1
            className={`${smallScreen ? ImageButtonStyle.smallH1Font : ''}`}
            style={{ fontSize: 26 }}
          >
            {props.descriptionText}
          </h1>
        </div>
      ) : (
        <div style={{ width: '80%' }}>
          <h1
            className={`${smallScreen ? ImageButtonStyle.smallH1Font : ''}`}
            style={{ fontSize: 26 }}
          >
            {props.headerText}
          </h1>
          <p
            className={`${smallScreen ? ImageButtonStyle.smallPFont : ''}`}
            style={{ fontSize: 15 }}
          >
            {props.descriptionText}
          </p>
        </div>
      )}
      {buttonVisibility ? (
        <div style={{ marginLeft: 'auto' }}>
          <Button style={{ color: props.buttonTextColor }}>
            {props.buttonText}
          </Button>
        </div>
      ) : null}
    </div>
  )
}
