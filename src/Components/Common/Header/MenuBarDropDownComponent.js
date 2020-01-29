import React from 'react'
import { Col, List, Row, Button } from 'antd'
import Container from '../Container/ContainerComponent'
import { frontEndEnvURL } from '../../Utilities/AppConstants'
import './MenuBarDropDownStyle.css'
import * as MenuBarDropDownStyle from './MenuBarDropDown.module.scss'

export default function MenuBarDropDownComponent(props) {
  const listData = props.listData
  const styles = {
    mainWrapperStyle: {
      opacity: 0,
      animation: '1s appear forwards',
    },
  }

  const onDropDownMenuItemClick = (header, text) => {
    props.onMenuItemClick(header, text)
  }

  return (
    <div className={'dropDownContainer'} style={styles.mainWrapperStyle}>
      <Container>
        <Row type="flex" justify="center" align="middle">
          <Col xs={24} sm={24} md={14} lg={12}>
            <Row>
              {listData.map((listItem, index) => {
                return (
                  <Col
                    key={`${listItem.header}-${index}`}
                    xs={24}
                    sm={listData.length === 3 ? 8 : 12}
                    lg={listData.length === 3 ? 8 : 6}
                  >
                    <List
                      header={listItem.header}
                      className={`commonHeader ${MenuBarDropDownStyle.listItems}`}
                      dataSource={listItem.data}
                      renderItem={item => (
                        <List.Item>
                          <Button
                            type="link"
                            onClick={() =>
                              onDropDownMenuItemClick(
                                listItem.filter,
                                item.text
                              )
                            }
                            style={{ color: 'rgba(0, 0, 0, 0.65)' }}
                          >
                            {item.text}
                          </Button>
                        </List.Item>
                      )}
                    />
                  </Col>
                )
              })}
            </Row>
          </Col>
          <Col xs={24} sm={24} md={10} lg={12}>
            <div className={MenuBarDropDownStyle.menuBarImgWrapper}>
              <img
                className={MenuBarDropDownStyle.menuBarImage}
                src={`${frontEndEnvURL}/icons/dropdownImage.png`}
                alt="Dropdown menu bar"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
