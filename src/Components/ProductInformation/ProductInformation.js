import React, { useEffect, useState } from 'react'
import {
  Button,
  Col,
  Collapse,
  Divider,
  Icon,
  List,
  Row,
  Breadcrumb,
  Modal,
} from 'antd'
import { Carousel } from 'react-responsive-carousel'
import * as FietsenMintjensAPI from '../../api/FietsenMintjensAPI'
import * as appConstants from '../Utilities/AppConstants'
import _ from 'lodash'

import FeedBackComponent from '../Common/Feedback/FeedBackComponent'
import Container from '../Common/Container/ContainerComponent'
import ModalForm from '../Common/ModalForm'

import * as ProductInformationStyle from './ProductInformation.module.scss'
import * as BikeComponentStyle from '../Utilities/BikeComponent/BikeComponent.module.scss'
import './ProductInformationStyle.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { navigate } from 'hookrouter'

const { Panel } = Collapse

export default function ProductInformation(props) {
  const [activeKey, setActiveKey] = useState()
  const [productDetail, setProductDetail] = useState()
  const [modalVisible, setModalVisible] = useState(false)
  const [formType, setFormType] = useState()

  useEffect(() => {
    FietsenMintjensAPI.getProductsById(props.productCategory, props.productId)
      .then(res => {
        if (!_.isEqual(productDetail, res.data)) {
          setProductDetail(res.data)
        }
      })
      .catch(err => {
        console.log('error occured to fetch the productDetail', err)
      })
  })

  return (
    <Container>
      <Row
        gutter={[{ xs: 12, sm: 16, md: 24, lg: 32 }, 20]}
        className={ProductInformationStyle.mainViewContainer}
      >
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <div className={ProductInformationStyle.colHeader}>
            <Breadcrumb>
              <Breadcrumb.Item
                href=""
                onClick={() => {
                  navigate('/')
                }}
              >
                <span>Fietsen</span>
              </Breadcrumb.Item>
              <Breadcrumb.Item
                href=""
                onClick={() => {
                  navigate(`/products/${props.productCategory}`)
                }}
              >
                <span>{props.productCategory}</span>
              </Breadcrumb.Item>
              <Breadcrumb.Item>Gazelle</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <Row
            type="flex"
            justify="center"
            className={ProductInformationStyle.detailView}
          >
            <Col
              xs={24}
              sm={24}
              md={10}
              lg={10}
              xl={8}
              className={ProductInformationStyle.carouselCol}
            >
              <div className={ProductInformationStyle.carouselWrapper}>
                <Carousel
                  showArrows={false}
                  showStatus={false}
                  key={productDetail ? productDetail._id : '0'}
                >
                  <div className={ProductInformationStyle.carouselImageWrapper}>
                    <img
                      alt={'Bike example 1 not found'}
                      src={
                        productDetail &&
                        `${appConstants.backEndEnvURL}/${productDetail.image}`
                      }
                    />
                  </div>
                  {/* <div className={ProductInformationStyle.carouselImageWrapper}>
                    <img
                      alt={'Bike example 2 not found'}
                      src={`${appConstants.frontEndEnvURL}/icons/HomePage/bikeExample2.png`}
                    />
                  </div> */}
                </Carousel>
              </div>
            </Col>
            <Col xs={24} sm={24} md={14} lg={14} xl={16}>
              <div style={{ paddingLeft: 30, paddingRight: 30 }}>
                <h1 className={ProductInformationStyle.blackColor}>
                  {productDetail ? productDetail.name : ''}
                </h1>
                {productDetail && productDetail.description && (
                  <p style={{ maxWidth: '380px' }}>
                    {productDetail.description}
                  </p>
                )}
                {productDetail && (
                  <List
                    className={'bikeComponentList'}
                    bordered={false}
                    itemLayout="horizontal"
                    dataSource={
                      productDetail.usps.length === 3
                        ? productDetail.usps.every(el => el !== '')
                          ? productDetail.usps
                          : productDetail.metadata.slice(0, 3)
                        : productDetail.metadata.slice(0, 3)
                    }
                    renderItem={item => (
                      <List.Item>
                        <div style={{ display: 'flex', marginLeft: '11px' }}>
                          <div
                            style={{ margin: '8px 8px' }}
                            className={BikeComponentStyle.dot}
                          />
                          <p style={{ color: 'black' }}>
                            {typeof item === 'string'
                              ? item
                              : `${item.name.charAt(0).toUpperCase() +
                                  item.name.slice(1)}: ${item.value}`}
                          </p>
                        </div>
                      </List.Item>
                    )}
                  />
                )}

                <div
                  className={'price'}
                  style={{ display: 'inline-flex', alignItems: 'center' }}
                >
                  <h2 className={ProductInformationStyle.blackColor}>
                    {productDetail ? `€${productDetail.price}` : ''}
                  </h2>
                </div>
                <div className={ProductInformationStyle.buttonWrapper}>
                  <h4 className={ProductInformationStyle.redColor}>
                    Ja! Dat is ‘em
                  </h4>
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      justifyContent: 'flex-start',
                    }}
                  >
                    <Button
                      type={'danger'}
                      style={{
                        marginRight: '10px',
                        marginBottom: '10px',
                        width: '151px',
                      }}
                      onClick={() => {
                        setModalVisible(!modalVisible)
                        setFormType('Reserveer')
                      }}
                    >
                      <img
                        style={{
                          width: '18px',
                          height: '18px',
                          marginRight: '5px',
                        }}
                        src={
                          process.env.PUBLIC_URL + '/icons/locationIcons.png'
                        }
                        alt={'Location Logo Not Found'}
                      />{' '}
                      Reserveer nu
                    </Button>
                    {props.productType !==
                      appConstants.bikesCategories.accessoires && (
                      <Button
                        style={{ width: '151px' }}
                        onClick={() => {
                          setModalVisible(!modalVisible)
                          setFormType('Proefrit')
                        }}
                      >
                        <img
                          style={{
                            width: '18px',
                            height: '18px',
                            marginRight: '5px',
                          }}
                          src={
                            process.env.PUBLIC_URL +
                            '/icons/locationIconRed.png'
                          }
                          alt={'Location Logo Not Found'}
                        />{' '}
                        Proefrit plannen
                      </Button>
                    )}
                  </div>
                </div>
                <div className={ProductInformationStyle.bikeInformation}>
                  {productDetail &&
                    productDetail.metadata.length > 0 &&
                    productDetail.metadata.map((item, index) => {
                      const name =
                        item.name.charAt(0).toUpperCase() + item.name.slice(1)
                      return (
                        <div key={index}>
                          <Divider />
                          <div
                            className={
                              ProductInformationStyle.bikeInformationListItem
                            }
                          >
                            <span>{name}:</span>
                            <span>{item.value}</span>
                          </div>
                        </div>
                      )
                    })}
                </div>
              </div>
            </Col>
            <Col span={1} />
          </Row>
          <Row className={ProductInformationStyle.helpQuestionView}>
            <Col span={24}>
              <Row gutter={[{ xs: 12, sm: 16, md: 24, lg: 32 }, 20]}>
                <Col xs={24} sm={24} md={12}>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <h1 className={ProductInformationStyle.blackColor}>
                      Hoe we jou aan de perfecte fiets helpen
                    </h1>
                    <Collapse
                      onChange={event => setActiveKey(event)}
                      accordion={true}
                      className={'bikeHelpCollapse'}
                    >
                      <Panel
                        showArrow={false}
                        header={
                          <div className={ProductInformationStyle.collapseRow}>
                            <Button
                              className={
                                ProductInformationStyle.collapseNoButton
                              }
                              ghost
                              type="primary"
                              shape="circle"
                            >
                              1
                            </Button>
                            <span>
                              We zoeken de fiets die het best bij jouw past
                            </span>
                            <Icon
                              style={{ marginLeft: '10px', color: 'red' }}
                              type={activeKey !== 1 ? 'plus' : 'minus'}
                            />
                          </div>
                        }
                        key="1"
                      >
                        <p>
                          We hebben al enorm veel tevreden klanten aan hun
                          perfecte fiets geholpen. Op basis van je noden vinden
                          we samen de perfecte fiets. Woon werk? Sportief? Super
                          speed? Voor ieders wat wils.
                        </p>
                      </Panel>
                      <Panel
                        showArrow={false}
                        header={
                          <div className={ProductInformationStyle.collapseRow}>
                            <Button
                              className={
                                ProductInformationStyle.collapseNoButton
                              }
                              ghost
                              type="primary"
                              shape="circle"
                            >
                              2
                            </Button>
                            <span>Opmeten maat en lichaamslengte</span>
                            <Icon
                              style={{ marginLeft: '10px', color: 'red' }}
                              type={activeKey !== 2 ? 'plus' : 'minus'}
                            />
                          </div>
                        }
                        key="2"
                      >
                        <p>Example 2</p>
                      </Panel>
                      <Panel
                        showArrow={false}
                        header={
                          <div className={ProductInformationStyle.collapseRow}>
                            <Button
                              className={
                                ProductInformationStyle.collapseNoButton
                              }
                              ghost
                              type="primary"
                              shape="circle"
                            >
                              3
                            </Button>
                            <span>Proefrit</span>
                            <Icon
                              style={{ marginLeft: '10px', color: 'red' }}
                              type={activeKey !== 3 ? 'plus' : 'minus'}
                            />
                          </div>
                        }
                        key="3"
                      >
                        <p>Example 3</p>
                      </Panel>
                      <Panel
                        showArrow={false}
                        header={
                          <div className={ProductInformationStyle.collapseRow}>
                            <Button
                              className={
                                ProductInformationStyle.collapseNoButton
                              }
                              ghost
                              type="primary"
                              shape="circle"
                            >
                              4
                            </Button>
                            <span>Opvolging, accessoires en onderhoud</span>
                            <Icon
                              style={{ marginLeft: '10px', color: 'red' }}
                              type={activeKey !== 4 ? 'plus' : 'minus'}
                            />
                          </div>
                        }
                        key="4"
                      >
                        <p>Example 4</p>
                      </Panel>
                    </Collapse>
                  </div>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <div>
                    {/* <FeedBackComponent /> */}
                    <h1 className={ProductInformationStyle.blackColor}>
                      LAAT JE BIJSTAAN DOOR ONZE MOUNTAINBIKE EXPERT
                    </h1>
                    <p>- Wat is mijn rij afstand?</p>
                    <p>- Hoe vaak moet ik opladen?</p>
                    <p>- Welke fiets is het best voor woon/ werk?</p>
                    <Button type="primary">
                      Doe beroep op Benny <Icon type="right" />
                    </Button>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
      <Modal
        visible={modalVisible}
        onCancel={() => setModalVisible(false)}
        closeIcon={false}
        footer={null}
        title={
          formType === 'Reserveer' ? 'Reserveer je fiets' : 'Boek je proefrit'
        }
      >
        <ModalForm formType={formType} />
      </Modal>
    </Container>
  )
}
