import React from 'react'
import './DateTextInformation.module.scss'
import { Icon } from 'antd'
import * as DateTextInformationStyle from './DateTextInformation.module.scss'
export default function DateTextInformationComponent(props) {
  return (
    <React.Fragment>
      <label>{props.date}</label>
      <a className={DateTextInformationStyle.moreInformation} href={props.link}>
        {props.text} <Icon type="right" />
      </a>
    </React.Fragment>
  )
}
