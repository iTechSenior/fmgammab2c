import React, { useEffect, useState } from 'react'
import {
  Breadcrumb,
  Checkbox,
  Col,
  Descriptions,
  Input,
  Row,
  Button,
} from 'antd'
import { navigate, useQueryParams } from 'hookrouter'
import _ from 'lodash'
import debounce from 'lodash/debounce'
import * as FietsenMintjensAPI from '../../api/FietsenMintjensAPI'
import * as appConstants from '../Utilities/AppConstants'

import Container from '../Common/Container/ContainerComponent'
import ImageButtonComponent from '../Utilities/ImageButtonComponent/ImageButtonComponent'
import BikeListComponent from '../Utilities/BikeComponent/BikeListComponent'

import './Product.css'
import * as ProductStyle from './Product.module.scss'

export default function Product(props) {
  // This what the api should at least respond with

  const [productsData, setProductsData] = useState([])
  const [state, setState] = useState({})
  const [queryParams] = useQueryParams()

  const bikeCompGridStyle = {
    gutter: 16,
    xs: 1,
    sm: 2,
    md: 2,
    lg: 2,
    xl: 3,
    xxl: 3,
  }

  useEffect(() => {
    FietsenMintjensAPI.getProductsByCategory(props.productCategory, state)
      .then(res => {
        if (!_.isEqual(productsData, res.data)) {
          setProductsData(res.data)
        }
      })
      .catch(fail => console.log(fail))
  })

  useEffect(() => {
    const { prevQueryParams } = state
    if (queryParams.key && !_.isEqual(prevQueryParams, queryParams)) {
      setState({
        ...state,
        [queryParams.key]: [queryParams.value],
        prevQueryParams: queryParams,
      })
    }
  })

  const [filterPanelVisible, setFilterPanelVisible] = useState(false)

  const styles = {
    filterSnelheidOptionPanel: {
      opacity: 0,
      animation: '1s appear forwards',
      animationDelay: '0.1s',
    },
    filterMerkOptionPanel: {
      opacity: 0,
      animation: '1s appear forwards',
      animationDelay: '0.2s',
    },
    filterPrijsOptionPanel: {
      opacity: 0,
      animation: '1s appear forwards',
      animationDelay: '0.3s',
    },
    filterGebruikOptionPanel: {
      opacity: 0,
      animation: '1s appear forwards',
      animationDelay: '0.4s',
    },
  }

  const handleFilterMenuBtnClick = () => {
    setFilterPanelVisible(!filterPanelVisible)
  }

  const handleMoreInfoBtnClick = id => {
    navigate(`/products/${props.productCategory}/${id}`)
    try {
      // trying to use new API - https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo
      window.scroll({
        top: 0,
        left: 0,
      })
    } catch (error) {
      // just a fallback for older browsers
      window.scrollTo(0, 0)
    }
  }

  const handleChangeTextDebounce = debounce((str, param) => {
    setState({ ...state, [param]: str })
  }, 500)

  const handleCheckBoxChange = (param, value) => e => {
    let currentValue = state[param]

    if (e.target.checked) {
      if (!currentValue) {
        currentValue = [value]
      } else {
        currentValue.push(value)
      }
    } else {
      if (currentValue) {
        const currentIndex = currentValue.findIndex(item => item === value)
        currentValue.splice(currentIndex, 1)
      }
    }
    setState({ ...state, [param]: currentValue })
  }

  return (
    <Container>
      <Row
        gutter={[{ xs: 12, sm: 16, md: 24, lg: 32 }, 20]}
        className={ProductStyle.mainViewContainer}
      >
        <Col xs={24} sm={24} md={24} lg={6} xl={5}>
          <div className={ProductStyle.colHeader}>
            <Breadcrumb>
              <Breadcrumb.Item
                href=""
                onClick={() => {
                  navigate('/')
                }}
              >
                Fietsen
              </Breadcrumb.Item>
              <Breadcrumb.Item>{props.productCategory}</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <Row
            gutter={[{ sm: 16, md: 24, lg: 32 }, 20]}
            type="flex"
            className={ProductStyle.filterViewsRow}
          >
            {props.productCategory ===
              appConstants.bikesCategories.accessoires && (
              <Col xs={24} sm={16} md={16} lg={24}>
                <div className={ProductStyle.filterPanel}>
                  <Descriptions
                    column={{ xs: 1, sm: 2, md: 3, lg: 1 }}
                    title={appConstants.filterOptions.Type.title}
                    colon={false}
                  >
                    {appConstants.filterOptions.Type.options.map((item, i) => (
                      <Descriptions.Item
                        key={i}
                        label={
                          <Checkbox
                            onChange={handleCheckBoxChange(
                              appConstants.filterOptions.Type.name,
                              item
                            )}
                            checked={
                              state[appConstants.filterOptions.Type.name]
                                ? state[
                                    appConstants.filterOptions.Type.name
                                  ].findIndex(el => el === item) >= 0
                                : false
                            }
                          />
                        }
                      >
                        {item}
                      </Descriptions.Item>
                    ))}
                  </Descriptions>
                </div>
              </Col>
            )}
            {props.productCategory === appConstants.bikesCategories.eBike && (
              <Col xs={24} sm={12} md={6} lg={24}>
                <div className={ProductStyle.filterPanel}>
                  <Descriptions
                    column={1}
                    title={appConstants.filterOptions.Speed.title}
                    colon={false}
                  >
                    {appConstants.filterOptions.Speed.options.map((item, i) => (
                      <Descriptions.Item
                        key={i}
                        label={
                          <Checkbox
                            onChange={handleCheckBoxChange(
                              appConstants.filterOptions.Speed.name,
                              item
                            )}
                            checked={
                              state[appConstants.filterOptions.Speed.name]
                                ? state[
                                    appConstants.filterOptions.Speed.name
                                  ].findIndex(el => el === item) >= 0
                                : false
                            }
                          />
                        }
                      >
                        {item}
                      </Descriptions.Item>
                    ))}
                  </Descriptions>
                </div>
              </Col>
            )}
            {props.productCategory !==
              appConstants.bikesCategories.accessoires && (
              <Col
                xs={24}
                sm={
                  props.productCategory === appConstants.bikesCategories.eBike
                    ? 12
                    : 8
                }
                md={
                  props.productCategory === appConstants.bikesCategories.eBike
                    ? 6
                    : 8
                }
                lg={24}
              >
                <div className={ProductStyle.filterPanel}>
                  <Descriptions
                    column={1}
                    title={appConstants.filterOptions.Brand.title}
                    colon={false}
                  >
                    {appConstants.filterOptions.Brand.options.map((item, i) => (
                      <Descriptions.Item
                        key={i}
                        label={
                          <Checkbox
                            onChange={handleCheckBoxChange(
                              appConstants.filterOptions.Brand.name,
                              item
                            )}
                            checked={
                              state[appConstants.filterOptions.Brand.name]
                                ? state[
                                    appConstants.filterOptions.Brand.name
                                  ].findIndex(el => el === item) >= 0
                                : false
                            }
                          />
                        }
                      >
                        {item}
                      </Descriptions.Item>
                    ))}
                  </Descriptions>
                </div>
              </Col>
            )}
            <Col
              xs={24}
              sm={
                props.productCategory === appConstants.bikesCategories.eBike
                  ? 12
                  : 8
              }
              md={
                props.productCategory === appConstants.bikesCategories.eBike
                  ? 6
                  : 8
              }
              lg={24}
            >
              <div className={ProductStyle.filterPanel}>
                <Descriptions
                  column={1}
                  title={appConstants.filterOptions.Price.title}
                  colon={false}
                >
                  {appConstants.filterOptions.Price.options.map((item, i) => (
                    <Descriptions.Item
                      key={i}
                      label={
                        <Input
                          placeholder={
                            item === 'minPrice' ? '€. Min' : '€. Max'
                          }
                          onChange={e =>
                            handleChangeTextDebounce(e.target.value, item)
                          }
                        />
                      }
                      className="descriptionInput"
                    />
                  ))}
                </Descriptions>
              </div>
            </Col>
            {props.productCategory !==
              appConstants.bikesCategories.accessoires && (
              <Col
                xs={24}
                sm={
                  props.productCategory === appConstants.bikesCategories.eBike
                    ? 12
                    : 8
                }
                md={
                  props.productCategory === appConstants.bikesCategories.eBike
                    ? 6
                    : 8
                }
                lg={24}
              >
                <div className={ProductStyle.filterPanel}>
                  <Descriptions
                    column={1}
                    title={appConstants.filterOptions.Usage.title}
                    colon={false}
                  >
                    {appConstants.filterOptions.Usage.options.map((item, i) => (
                      <Descriptions.Item
                        key={i}
                        label={
                          <Checkbox
                            onChange={handleCheckBoxChange(
                              appConstants.filterOptions.Usage.name,
                              item
                            )}
                            checked={
                              state[appConstants.filterOptions.Usage.name]
                                ? state[
                                    appConstants.filterOptions.Usage.name
                                  ].findIndex(el => el === item) >= 0
                                : false
                            }
                          />
                        }
                      >
                        {item}
                      </Descriptions.Item>
                    ))}
                  </Descriptions>
                </div>
              </Col>
            )}
          </Row>
          <Row className={ProductStyle.filterMenuBar}>
            <Col
              span={24}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <span style={{ color: 'red' }}>FILTEREN</span>
              <Button
                type="danger"
                icon="filter"
                style={{ color: 'white' }}
                onClick={() => handleFilterMenuBtnClick()}
              />
            </Col>
          </Row>
          <Row className={'filterPanelForMobileRow'}>
            <Col
              className={ProductStyle.filterPanelForMobile}
              span={24}
              style={{
                height: filterPanelVisible
                  ? props.productCategory === appConstants.bikesCategories.eBike
                    ? 748
                    : props.productCategory ===
                      appConstants.bikesCategories.accessoires
                    ? 670
                    : 615
                  : 0,
              }}
            >
              {filterPanelVisible && (
                <React.Fragment>
                  {props.productCategory ===
                    appConstants.bikesCategories.accessoires && (
                    <div
                      className={ProductStyle.filterPanel}
                      style={styles.filterSnelheidOptionPanel}
                    >
                      <Descriptions
                        column={{ xs: 1, sm: 2, md: 3, lg: 1 }}
                        title={appConstants.filterOptions.Type.title}
                        colon={false}
                      >
                        {appConstants.filterOptions.Type.options.map(
                          (item, i) => (
                            <Descriptions.Item
                              key={i}
                              label={
                                <Checkbox
                                  onChange={handleCheckBoxChange(
                                    appConstants.filterOptions.Type.title,
                                    item
                                  )}
                                  checked={
                                    state[appConstants.filterOptions.Type.name]
                                      ? state[
                                          appConstants.filterOptions.Type.name
                                        ].findIndex(el => el === item) >= 0
                                      : false
                                  }
                                />
                              }
                            >
                              {item}
                            </Descriptions.Item>
                          )
                        )}
                      </Descriptions>
                    </div>
                  )}
                  {props.productCategory ===
                    appConstants.bikesCategories.eBike && (
                    <div
                      className={ProductStyle.filterPanel}
                      style={styles.filterSnelheidOptionPanel}
                    >
                      <Descriptions
                        column={1}
                        title={appConstants.filterOptions.Speed.title}
                        colon={false}
                      >
                        {appConstants.filterOptions.Speed.options.map(
                          (item, i) => (
                            <Descriptions.Item
                              key={i}
                              label={
                                <Checkbox
                                  onChange={handleCheckBoxChange(
                                    appConstants.filterOptions.Speed.name,
                                    item
                                  )}
                                  checked={
                                    state[appConstants.filterOptions.Speed.name]
                                      ? state[
                                          appConstants.filterOptions.Speed.name
                                        ].findIndex(el => el === item) >= 0
                                      : false
                                  }
                                />
                              }
                            >
                              {item}
                            </Descriptions.Item>
                          )
                        )}
                      </Descriptions>
                    </div>
                  )}
                  {props.productCategory !==
                    appConstants.bikesCategories.accessoires && (
                    <div
                      className={ProductStyle.filterPanel}
                      style={styles.filterMerkOptionPanel}
                    >
                      <Descriptions
                        column={1}
                        title={appConstants.filterOptions.Brand.title}
                        colon={false}
                      >
                        {appConstants.filterOptions.Brand.options.map(
                          (item, i) => (
                            <Descriptions.Item
                              key={i}
                              label={
                                <Checkbox
                                  onChange={handleCheckBoxChange(
                                    appConstants.filterOptions.Brand.name,
                                    item
                                  )}
                                  checked={
                                    state[appConstants.filterOptions.Brand.name]
                                      ? state[
                                          appConstants.filterOptions.Brand.name
                                        ].findIndex(el => el === item) >= 0
                                      : false
                                  }
                                />
                              }
                            >
                              {item}
                            </Descriptions.Item>
                          )
                        )}
                      </Descriptions>
                    </div>
                  )}

                  <div
                    className={ProductStyle.filterPanel}
                    style={styles.filterPrijsOptionPanel}
                  >
                    <Descriptions
                      column={1}
                      title={appConstants.filterOptions.Price.title}
                      colon={false}
                    >
                      {appConstants.filterOptions.Price.options.map(
                        (item, i) => (
                          <Descriptions.Item
                            key={i}
                            label={
                              <Input
                                placeholder={
                                  item === 'minPrice' ? '€. Min' : '€. Max'
                                }
                                onChange={e =>
                                  handleChangeTextDebounce(e.target.value, item)
                                }
                              />
                            }
                            className="descriptionInput"
                          />
                        )
                      )}
                    </Descriptions>
                  </div>
                  {props.productCategory !==
                    appConstants.bikesCategories.accessoires && (
                    <div
                      className={ProductStyle.filterPanel}
                      style={styles.filterGebruikOptionPanel}
                    >
                      <Descriptions
                        column={1}
                        title={appConstants.filterOptions.Usage.title}
                        colon={false}
                      >
                        {appConstants.filterOptions.Usage.options.map(
                          (item, i) => (
                            <Descriptions.Item
                              key={i}
                              label={
                                <Checkbox
                                  onChange={handleCheckBoxChange(
                                    appConstants.filterOptions.Usage.name,
                                    item
                                  )}
                                  checked={
                                    state[appConstants.filterOptions.Usage.name]
                                      ? state[
                                          appConstants.filterOptions.Usage.name
                                        ].findIndex(el => el === item) >= 0
                                      : false
                                  }
                                />
                              }
                            >
                              {item}
                            </Descriptions.Item>
                          )
                        )}
                      </Descriptions>
                    </div>
                  )}
                </React.Fragment>
              )}
            </Col>
          </Row>
        </Col>
        <Col xs={24} sm={24} md={24} lg={18} xl={{ span: 18, offset: 1 }}>
          <div className={ProductStyle.colHeader}>
            <div className={ProductStyle.bikesGridViewHeader}>
              <span style={{ color: 'red', fontSize: '20px' }}>
                Onze {props.productCategory}
              </span>
              {/* <Button>
                <img
                  style={{
                    width: '18px',
                    height: '18px',
                    marginRight: `${isSmallScreenForMobile ? 0 : '10px'}`,
                  }}
                  src={process.env.PUBLIC_URL + '/icons/filter-and-sort.png'}
                  alt={'Sort the result'}
                />
                {isSmallScreenForMobile ? '' : 'Sorteer resultaten'}
              </Button> */}
            </div>
          </div>
          <Row type="flex">
            <Col xs={24} md={24} lg={24}>
              <div className={ProductStyle.adsHeaderBanner}>
                <div className={ProductStyle.adsHeaderImage}>
                  <img
                    src={`${appConstants.frontEndEnvURL}/icons/ProductPage/headerBike.png`}
                    width={'100%'}
                    height={'240px'}
                    alt="Header Bike  Not Found"
                  />
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    marginBottom: 20,
                  }}
                >
                  <ImageButtonComponent
                    width={'270px'}
                    height={'240px'}
                    headerText={'GRAAG EEN E-BIKE TESTEN?'}
                    descriptionText={'Kom gerust eens langs!'}
                    buttonText={'Vind jouw winkel'}
                    imgSrc={'icons/HomePage/currentPromotionImage.png'}
                    buttonTextColor={'#0BB143'}
                  />
                </div>
              </div>
            </Col>
            <Col />
          </Row>
          <Row
            style={{ backgroundColor: '#f9f9f9' }}
            type="flex"
            justify="space-between"
          >
            <Col span={24}>
              <BikeListComponent
                gridStyle={bikeCompGridStyle}
                onMoreInfoBtnClick={id => handleMoreInfoBtnClick(id)}
                bikeData={productsData}
              />
            </Col>
          </Row>
        </Col>
        <Col span={1} />
      </Row>
    </Container>
  )
}
