import React, { useEffect, useState } from 'react'
import { Col, Icon, Row, Input, Button, Menu, List } from 'antd'
import AppStyle from '../../../App.module.scss'
import './HeaderComponentStyle.css'
import * as appConstants from '../../Utilities/AppConstants'
import { navigate } from 'hookrouter'
import { frontEndEnvURL } from '../../Utilities/AppConstants'
import Container from '../Container/ContainerComponent'
import { useMediaPredicate } from 'react-media-hook'
import * as HeaderComponentStyle from './HeaderComponent.module.scss'

import MenuBarDropDownComponent from './MenuBarDropDownComponent'
import HamburgerMenuComponent from './HamburgerMenuButton/HamburgerMenuButton'
import MenuItem from './MenuItem/MenuItem'
import ContactView from './ContactView/ContactView'

const { Search } = Input
const { SubMenu } = Menu
const menuItems = [
  'E-Bikes',
  'Sportfietsen',
  'Stadsfietsen',
  'Mountainbikes',
  'Accessoires',
]

export default function HeaderComponent() {
  const isSmallScreen = useMediaPredicate('(max-width: 890px)')
  const isSmallScreenForMobile = useMediaPredicate('(max-width: 410px)')

  const [isDropdownVisible, setDropDownVisibility] = useState(false)
  const [activeKey, setActiveKey] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const [contactViewVisible, setContactViewVisible] = useState(false)

  const handleHamburgerMenuBtnClick = () => {
    setMenuOpen(!menuOpen)
    setDropDownVisibility(false)
  }

  const handleContactIconClick = () => {
    setContactViewVisible(!contactViewVisible)
  }

  function TriggerDropDownMenu(actvKey) {
    if (isDropdownVisible && actvKey !== activeKey) {
      setActiveKey(actvKey)
    } else {
      setDropDownVisibility(!isDropdownVisible)
      setActiveKey(actvKey)
    }
  }

  function switchData() {
    let data = []
    switch (activeKey) {
      case appConstants.bikesCategories.eBike:
        data = [
          {
            header: 'Populaire E-bikes',
            data: [
              { text: 'Scott (20)' },
              { text: 'Gazelle (39)' },
              { text: 'Bizobike (12)' },
              { text: 'Koga (15)' },
            ],
          },
          {
            header: 'Types E-bikes',
            data: [
              { text: 'Stad (20)' },
              { text: 'Mountainbike (39)' },
              { text: 'Sportief (12)' },
              { text: 'Bakfiets (15)' },
            ],
          },
          {
            header: 'Snelheid',
            data: [{ text: '25 km/u (20)' }, { text: '45 km/u (20)' }],
          },
          {
            header: 'Gebruik',
            data: [
              { text: 'Woon-werk (39)' },
              { text: 'Hobby (23)' },
              { text: 'Pro (22)' },
              { text: 'Vije tijd (22)' },
            ],
          },
        ]
        break
      case appConstants.bikesCategories.sportBike:
        data = [
          {
            header: 'Populaire Sportfietsen',
            data: [
              { text: 'Scott (20)' },
              { text: 'Gazelle (39)' },
              { text: 'Koga (12)' },
              { text: 'Stromer (15)' },
            ],
          },
          {
            header: 'Types Sportfietsen',
            data: [
              { text: 'Scott (20)' },
              { text: 'Gazelle (39)' },
              { text: 'Koga (12)' },
              { text: 'Stromer (15)' },
            ],
          },
          {
            header: 'Gebruik',
            data: [
              { text: 'Scott (20)' },
              { text: 'Gazelle (39)' },
              { text: 'Koga (12)' },
              { text: 'Stromer (15)' },
            ],
          },
        ]
        break
      case appConstants.bikesCategories.cityBike:
        data = [
          {
            header: 'Populaire Stadsfietsen',
            data: [
              { text: 'Scott (20)' },
              { text: 'Gazelle (39)' },
              { text: 'Koga (12)' },
              { text: 'Stromer (15)' },
            ],
          },
          {
            header: 'Types Stadsfietsen',
            data: [
              { text: 'Scott (20)' },
              { text: 'Gazelle (39)' },
              { text: 'Koga (12)' },
              { text: 'Stromer (15)' },
            ],
          },
          {
            header: 'Gebruik',
            data: [
              { text: 'Scott (20)' },
              { text: 'Gazelle (39)' },
              { text: 'Koga (12)' },
              { text: 'Stromer (15)' },
            ],
          },
        ]
        break
      case appConstants.bikesCategories.mountainBike:
        data = [
          {
            header: 'Populaire Mountainbikes',
            data: [
              { text: 'Scott (20)' },
              { text: 'Gazelle (39)' },
              { text: 'Koga (12)' },
              { text: 'Stromer (15)' },
            ],
          },
          {
            header: 'Types Mountainbikes',
            data: [
              { text: 'Scott (20)' },
              { text: 'Gazelle (39)' },
              { text: 'Koga (12)' },
              { text: 'Stromer (15)' },
            ],
          },
          {
            header: 'Gebruik',
            data: [
              { text: 'Scott (20)' },
              { text: 'Gazelle (39)' },
              { text: 'Koga (12)' },
              { text: 'Stromer (15)' },
            ],
          },
        ]
        break
      case appConstants.accessories:
        data = [
          {
            header: 'Populaire Accessoires',
            data: [
              { text: 'Scott (20)' },
              { text: 'Gazelle (39)' },
              { text: 'Koga (12)' },
              { text: 'Stromer (15)' },
            ],
          },
          {
            header: 'Types Accessoires',
            data: [
              { text: 'Scott (20)' },
              { text: 'Gazelle (39)' },
              { text: 'Koga (12)' },
              { text: 'Stromer (15)' },
            ],
          },
          {
            header: 'Gebruik',
            data: [
              { text: 'Scott (20)' },
              { text: 'Gazelle (39)' },
              { text: 'Koga (12)' },
              { text: 'Stromer (15)' },
            ],
          },
        ]
        break
      default:
        data = [{ header: 'Not Found', data: [] }]
    }
    return data
  }

  return (
    <React.Fragment>
      <Container>
        <Row
          type="flex"
          justify="space-between"
          align="middle"
          style={{
            paddingTop: 20,
            paddingBottom: 20,
            paddingLeft: 10,
            paddingRight: 10,
          }}
          className={HeaderComponentStyle.contactRowWrapper}
        >
          <Col md={16} lg={12}>
            <div className={HeaderComponentStyle.contactInformation}>
              <Icon
                style={{ color: 'red', marginRight: 7, fontSize: '16px' }}
                type="phone"
                theme="filled"
                rotate={90}
              />
              <span>
                Advies nodig? Bel ons op{' '}
                <span style={{ color: 'red' }}>+32 488 69 04 86</span> | ma - vr
                09:00 tot
              </span>
            </div>
          </Col>
          <Col lg={8}>
            <div style={{ textAlign: 'right' }}>
              <span>E-bike info avonden Contact </span>
            </div>
          </Col>
        </Row>

        <Row
          type="flex"
          justify="space-between"
          align="middle"
          style={{ paddingBottom: 30 }}
        >
          <Col xs={24} sm={24} md={8} lg={8}>
            <div className={HeaderComponentStyle.appLogoImage}>
              <Button
                type="link"
                style={{
                  width: '250px',
                  height: '60px',
                  padding: 0,
                  background: `url(${appConstants.frontEndEnvURL}/icons/fietslogo.svg) no-repeat center center`,
                }}
                onClick={() => {
                  navigate('/')
                }}
              />
            </div>
          </Col>
          <Col xs={24} sm={24} md={16} lg={12}>
            <div className={HeaderComponentStyle.searchInputWrapper}>
              <Search
                placeholder="Zoek fiets, merk, …."
                onSearch={value => console.log(value)}
                className={HeaderComponentStyle.searchInput}
              />
              <Button type={'danger'}>
                <img
                  style={{
                    width: '18px',
                    height: '18px',
                    marginRight: `${isSmallScreenForMobile ? 0 : '5px'}`,
                  }}
                  src={process.env.PUBLIC_URL + '/icons/locationIcons.png'}
                  alt={'Location Logo Not Found'}
                />
                {isSmallScreenForMobile ? '' : 'Winkelpunten'}
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
      <Row type="flex" justify="center" className={AppStyle.appPrimaryColor}>
        <Container>
          <Row
            type="flex"
            justify="space-between"
            align="middle"
            style={{ height: 60 }}
          >
            <Col className={HeaderComponentStyle.contactIconWrapper}>
              <Icon
                onClick={() => handleContactIconClick()}
                style={{
                  color: 'white',
                  marginRight: 7,
                  cursor: 'pointer',
                  fontSize: '18px',
                }}
                type="phone"
                theme="filled"
                rotate={90}
              />
            </Col>
            <Col
              xs={22}
              sm={22}
              md={22}
              lg={20}
              xl={20}
              style={{ height: 60 }}
              className={HeaderComponentStyle.menuButtonWrapper}
            >
              <Button
                className={`${
                  isDropdownVisible &&
                  activeKey === appConstants.bikesCategories.eBike
                    ? HeaderComponentStyle.menuButtonWhite
                    : ''
                }`}
                onClick={() => {
                  TriggerDropDownMenu(appConstants.bikesCategories.eBike)
                }}
                style={{
                  height: '60px',
                  color: 'white',
                  fontSize: `${isSmallScreen ? '14px' : '18px'}`,
                }}
                type={'link'}
              >
                E-Bikes
                <Icon type="caret-down" />
              </Button>
              <Button
                className={`${
                  isDropdownVisible &&
                  activeKey === appConstants.bikesCategories.sportBike
                    ? HeaderComponentStyle.menuButtonWhite
                    : ''
                }`}
                onClick={() => {
                  TriggerDropDownMenu(appConstants.bikesCategories.sportBike)
                }}
                style={{
                  height: '60px',
                  color: 'white',
                  fontSize: `${isSmallScreen ? '14px' : '18px'}`,
                }}
                type={'link'}
              >
                Sportfietsen
                <Icon type="caret-down" />
              </Button>
              <Button
                className={`${
                  isDropdownVisible &&
                  activeKey === appConstants.bikesCategories.cityBike
                    ? HeaderComponentStyle.menuButtonWhite
                    : ''
                }`}
                onClick={() => {
                  TriggerDropDownMenu(appConstants.bikesCategories.cityBike)
                }}
                style={{
                  height: '60px',
                  color: 'white',
                  fontSize: `${isSmallScreen ? '14px' : '18px'}`,
                }}
                type={'link'}
              >
                Stadsfietsen
                <Icon type="caret-down" />
              </Button>
              <Button
                className={`${
                  isDropdownVisible &&
                  activeKey === appConstants.bikesCategories.mountainBike
                    ? HeaderComponentStyle.menuButtonWhite
                    : ''
                }`}
                onClick={() => {
                  TriggerDropDownMenu(appConstants.bikesCategories.mountainBike)
                }}
                style={{
                  height: '60px',
                  color: 'white',
                  fontSize: `${isSmallScreen ? '14px' : '18px'}`,
                }}
                type={'link'}
              >
                Mountainbikes
                <Icon type="caret-down" />
              </Button>
              <Button
                className={`${
                  isDropdownVisible && activeKey === appConstants.accessories
                    ? HeaderComponentStyle.menuButtonWhite
                    : ''
                }`}
                onClick={() => {
                  TriggerDropDownMenu(appConstants.accessories)
                }}
                style={{
                  height: '60px',
                  color: 'white',
                  fontSize: `${isSmallScreen ? '14px' : '18px'}`,
                }}
                type={'link'}
              >
                Accessoires
                <Icon type="caret-down" />
              </Button>
            </Col>
            <Col
              xs={2}
              sm={2}
              md={2}
              lg={2}
              style={{ display: 'flex', justifyContent: 'flex-end' }}
            >
              <HamburgerMenuComponent
                menuOpen={menuOpen}
                onClick={() => handleHamburgerMenuBtnClick()}
              />
            </Col>
          </Row>
        </Container>
      </Row>

      {/* Responsive Menu Bar */}
      <div
        className={HeaderComponentStyle.menuList}
        style={{ height: menuOpen ? 250 : 0 }}
      >
        {menuOpen &&
          menuItems.map((item, index) => (
            <React.Fragment>
              <MenuItem
                key={index}
                delay={`${index * 0.1}s`}
                onClick={() => TriggerDropDownMenu(item)}
              >
                {item}
              </MenuItem>
            </React.Fragment>
          ))}
        {isDropdownVisible && (
          <MenuBarDropDownComponent listData={switchData()} />
        )}
      </div>

      {/* Contact View */}
      {contactViewVisible && <ContactView />}

      {!menuOpen && isDropdownVisible && (
        <MenuBarDropDownComponent listData={switchData()} />
      )}
    </React.Fragment>
  )
}
