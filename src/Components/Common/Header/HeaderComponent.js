import React, { useEffect, useState } from 'react'
import { Col, Icon, Row, Input, Button, AutoComplete } from 'antd'
import { navigate, useQueryParams } from 'hookrouter'
import { useMediaPredicate } from 'react-media-hook'
import * as appConstants from '../../Utilities/AppConstants'
import * as FietsenMintjensAPI from '../../../api/FietsenMintjensAPI'
import debounce from 'lodash/debounce'
import _ from 'lodash'

import Container from '../Container/ContainerComponent'
import MenuBarDropDownComponent from './MenuBarDropDownComponent'
import HamburgerMenuComponent from './HamburgerMenuButton/HamburgerMenuButton'
import MenuItem from './MenuItem/MenuItem'
import ContactView from './ContactView/ContactView'

import AppStyle from '../../../App.module.scss'
import * as HeaderComponentStyle from './HeaderComponent.module.scss'
import './HeaderComponentStyle.css'

const { Search } = Input
const { Option } = AutoComplete
const menuItems = [
  'E-Bikes',
  'Sportfietsen',
  'Stadsfietsen',
  'Mountainbikes',
  'Accessoires',
]

export default function HeaderComponent() {
  const isSmallScreen = useMediaPredicate('(max-width: 948px)')
  const isSmallScreenForMobile = useMediaPredicate('(max-width: 410px)')

  const [isDropdownVisible, setDropDownVisibility] = useState(false)
  const [activeKey, setActiveKey] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const [contactViewVisible, setContactViewVisible] = useState(false)
  const [searchKeyword, setSearchKeyword] = useState()
  const [dataSource, setDataSource] = useState([])
  const [queryParams, setQueryParams] = useQueryParams()
  const [searchInputValue, setSearchInputValue] = useState()

  useEffect(() => {
    if (searchKeyword && searchKeyword.length > 2) {
      FietsenMintjensAPI.getSearchResults(searchKeyword)
        .then(res => {
          if (!_.isEqual(dataSource, res.data)) setDataSource(res.data)
          console.log('search results', res.data)
        })
        .catch(err => {
          console.log('error', err)
        })
    } else {
      if (dataSource.length > 0) setDataSource([])
    }
  })

  const handleHamburgerMenuBtnClick = () => {
    setMenuOpen(!menuOpen)
    setDropDownVisibility(false)
  }

  const handleContactIconClick = () => {
    setContactViewVisible(!contactViewVisible)
  }

  const handleMenuItemClick = item => {
    navigate(`/products/${item}`)
    setMenuOpen(!menuOpen)
  }

  function TriggerDropDownMenu(actvKey) {
    if (isDropdownVisible && actvKey !== activeKey) {
      setActiveKey(actvKey)
    } else {
      setDropDownVisibility(!isDropdownVisible)
      setActiveKey(actvKey)
    }
  }

  const handleDropDownMenuItemClick = (header, text) => {
    setDropDownVisibility(false)
    setQueryParams({ key: header, value: text }, true)
    navigate(`/products/${activeKey}`, false)
  }

  const handleSearch = debounce(text => {
    setSearchKeyword(text)
  }, 500)

  const handleSelect = value => {
    setSearchKeyword(dataSource[value].name)
  }

  const handleAutoCompleteOptionClick = (id, category) => {
    let productType
    if (category.findIndex(el => el === 'accessoires') >= 0) {
      productType = 'Accessoires'
    } else if (category.findIndex(el => el === 'fietsen') >= 0) {
      if (category[1] === 'e-bikes') {
        productType =
          category[1].charAt(0).toUpperCase() +
          '-' +
          category[1].charAt(2).toUpperCase() +
          category[1].slice(3)
      } else {
        productType = category[1].charAt(0).toUpperCase() + category[1].slice(1)
      }
    } else {
      productType = category[0]
    }
    navigate(`/products/${productType}/${id}`)
  }

  const handleSearchClick = () => {
    setQueryParams({ keyword: searchKeyword }, true)
    if (dataSource.length > 0) navigate(`/products/search`)
  }

  const handleChange = value => {
    setSearchInputValue(value)
  }

  const renderOption = (item, index) => {
    return (
      <Option key={index} text={item.name}>
        <div
          onClick={() =>
            handleAutoCompleteOptionClick(item._id, item.categories)
          }
          style={{
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
          }}
        >
          {item.name}
        </div>
      </Option>
    )
  }

  function switchData() {
    let data = []
    switch (activeKey) {
      case appConstants.bikesCategories.eBike:
        data = [
          {
            header: 'Populaire E-bikes',
            filter: 'brand',
            data: [
              { text: 'Scott' },
              { text: 'Gazelle' },
              { text: 'Bizobike' },
              { text: 'Koga' },
            ],
          },
          {
            header: 'Snelheid',
            filter: 'speed',
            data: [{ text: '25 km/u' }, { text: '45 km/u' }],
          },
          {
            header: 'Gebruik',
            filter: 'usage',
            data: [
              { text: 'Woon-werk' },
              { text: 'Hobby' },
              { text: 'Pro' },
              { text: 'Vrije tijd' },
            ],
          },
        ]
        break
      case appConstants.bikesCategories.raceBike:
        data = [
          {
            header: 'Populaire Racefietsen',
            data: [
              { text: 'Scott (20)' },
              { text: 'Gazelle (39)' },
              { text: 'Koga (12)' },
              { text: 'Stromer (15)' },
            ],
          },
          {
            header: 'Types Racefietsen',
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
              <a
                href="https://www.fietsenmintjens.be/e-bike-infoavonden/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginRight: 10 }}
              >
                E-bike info avonden
              </a>
              <a
                href="https://www.fietsenmintjens.be/contact/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact
              </a>
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
                  setSearchKeyword('')
                  setDataSource([])
                  setSearchInputValue('')
                  navigate('/')
                }}
              />
            </div>
          </Col>
          <Col xs={24} sm={24} md={16} lg={12}>
            <div className={HeaderComponentStyle.searchInputWrapper}>
              <div className="global-search-wrapper" style={{ width: 300 }}>
                <AutoComplete
                  placeholder="Zoek fiets, merk, …."
                  onSearch={handleSearch}
                  className={'global-search'}
                  dataSource={dataSource.map(renderOption)}
                  onSearch={value => {
                    setSearchInputValue(value)
                    handleSearch(value)
                  }}
                  onChange={value => {
                    handleChange(value)
                  }}
                  onSelect={handleSelect}
                  optionLabelProp="text"
                  value={searchInputValue}
                >
                  <Input
                    suffix={
                      <Button
                        className="search-btn"
                        style={{ marginRight: -12 }}
                        type="primary"
                        onClick={() => handleSearchClick()}
                      >
                        <Icon type="search" />
                      </Button>
                    }
                  />
                </AutoComplete>
              </div>
              <a
                href="https://www.fietsenmintjens.be/onze-fietsenwinkels/"
                target="_blank"
                rel="noopener noreferrer"
              >
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
              </a>
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
              xs={24}
              sm={24}
              md={24}
              lg={24}
              xl={24}
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
                  activeKey === appConstants.bikesCategories.cityBike
                    ? HeaderComponentStyle.menuButtonWhite
                    : ''
                }`}
                onClick={() => {
                  navigate(`/products/${appConstants.bikesCategories.cityBike}`)
                }}
                style={{
                  height: '60px',
                  color: 'white',
                  fontSize: `${isSmallScreen ? '14px' : '18px'}`,
                }}
                type={'link'}
              >
                Stadsfietsen
              </Button>
              <Button
                className={`${
                  isDropdownVisible &&
                  activeKey === appConstants.bikesCategories.mountainBike
                    ? HeaderComponentStyle.menuButtonWhite
                    : ''
                }`}
                onClick={() => {
                  navigate(
                    `/products/${appConstants.bikesCategories.mountainBike}`
                  )
                }}
                style={{
                  height: '60px',
                  color: 'white',
                  fontSize: `${isSmallScreen ? '14px' : '18px'}`,
                }}
                type={'link'}
              >
                Mountainbikes
              </Button>
              <Button
                className={`${
                  isDropdownVisible &&
                  activeKey === appConstants.bikesCategories.raceBike
                    ? HeaderComponentStyle.menuButtonWhite
                    : ''
                }`}
                onClick={() => {
                  navigate(`/products/${appConstants.bikesCategories.raceBike}`)
                }}
                style={{
                  height: '60px',
                  color: 'white',
                  fontSize: `${isSmallScreen ? '14px' : '18px'}`,
                }}
                type={'link'}
              >
                Racefietsen
              </Button>
              <Button
                className={`${
                  isDropdownVisible &&
                  activeKey === appConstants.bikesCategories.vouwBike
                    ? HeaderComponentStyle.menuButtonWhite
                    : ''
                }`}
                onClick={() => {
                  navigate(`/products/${appConstants.bikesCategories.vouwBike}`)
                }}
                style={{
                  height: '60px',
                  color: 'white',
                  fontSize: `${isSmallScreen ? '14px' : '18px'}`,
                }}
                type={'link'}
              >
                Vouwfietsen
              </Button>
              <Button
                className={`${
                  isDropdownVisible && activeKey === appConstants.accessories
                    ? HeaderComponentStyle.menuButtonWhite
                    : ''
                }`}
                onClick={() => {
                  navigate(
                    `/products/${appConstants.bikesCategories.accessoires}`
                  )
                }}
                style={{
                  height: '60px',
                  color: 'white',
                  fontSize: `${isSmallScreen ? '14px' : '18px'}`,
                }}
                type={'link'}
              >
                Accessoires
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
                onClick={() => handleMenuItemClick(item)}
              >
                {item}
              </MenuItem>
            </React.Fragment>
          ))}
      </div>

      {/* Contact View */}
      {contactViewVisible && <ContactView />}

      {!menuOpen && isDropdownVisible && (
        <MenuBarDropDownComponent
          listData={switchData()}
          onMenuItemClick={(header, text) =>
            handleDropDownMenuItemClick(header, text)
          }
        />
      )}
    </React.Fragment>
  )
}
