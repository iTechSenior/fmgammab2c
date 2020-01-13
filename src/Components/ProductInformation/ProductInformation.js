import React, { useState } from 'react'
import {
  Button,
  Col,
  Collapse,
  Divider,
  Icon,
  List,
  Row,
  Breadcrumb,
} from 'antd'
import { navigate } from 'hookrouter'
import * as appConstants from '../Utilities/AppConstants'
import * as ProductInformationStyle from './ProductInformation.module.scss'
import * as BikeComponentStyle from '../Utilities/BikeComponent/BikeComponent.module.scss'
import './ProductInformationStyle.css'
import FeedBackComponent from '../Common/Feedback/FeedBackComponent'
import Container from '../Common/Container/ContainerComponent'

const { Panel } = Collapse

export default function ProductInformation(props) {
  const [activeKey, setActiveKey] = useState()

  const bikeData = [
    { title: 'Snelheid van 25km/u' },
    { title: 'Motorpositie: Midden' },
    { title: 'Versnellingen: 5' },
  ]
  return (
    <Container>
      <Row
        gutter={[{ xs: 12, sm: 16, md: 24, lg: 32 }, 20]}
        className={ProductInformationStyle.mainViewContainer}
      >
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <div className={ProductInformationStyle.colHeader}>
            <Breadcrumb>
              <Breadcrumb.Item href="/">
                <span>Fietsen</span>
              </Breadcrumb.Item>
              <Breadcrumb.Item href="/products/E-Bikes">
                <span>{props.productType}</span>
              </Breadcrumb.Item>
              <Breadcrumb.Item>Gazelle</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <Row type={'flex'} className={ProductInformationStyle.detailView}>
            <Col xs={24} sm={24} md={12} lg={10}>
              <div
                className="fotorama dola"
                data-nav="thumbs"
                style={{ display: 'flex', justifyContent: 'center' }}
              >
                <img
                  alt={'Bike example 1 not found'}
                  src={`${appConstants.frontEndEnvURL}/icons/HomePage/bikeExample.png`}
                />
                <img
                  alt={'Bike example 2 not found'}
                  src={`${appConstants.frontEndEnvURL}/icons/HomePage/bikeExample2.png`}
                />
              </div>
            </Col>
            <Col xs={24} sm={24} md={12} lg={14}>
              <div style={{ paddingLeft: 20, paddingRight: 20 }}>
                <h1 className={ProductInformationStyle.blackColor}>
                  Gazelle Esprit C7 Dames L.I.
                </h1>
                <p style={{ maxWidth: '380px' }}>
                  Luxe en stijl voor dagelijks gebruik; met hoogwaardige
                  afmontage voor veel fietsplezier en lange levensduur
                </p>
                <List
                  className={'bikeComponentList'}
                  bordered={false}
                  itemLayout="horizontal"
                  dataSource={bikeData}
                  renderItem={item => (
                    <List.Item>
                      <div style={{ display: 'flex', marginLeft: '11px' }}>
                        <div
                          style={{ margin: '8px 8px' }}
                          className={BikeComponentStyle.dot}
                        />
                        <p style={{ color: 'black' }}>{item.title}</p>
                      </div>
                    </List.Item>
                  )}
                />
                <div
                  className={'price'}
                  style={{ display: 'inline-flex', alignItems: 'center' }}
                >
                  <h2 className={ProductInformationStyle.blackColor}>
                    €999,00
                  </h2>
                  <p style={{ marginLeft: '10px', color: '#009808' }}>
                    op voorraad
                  </p>
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
                    <Button style={{ width: '151px' }}>
                      <img
                        style={{
                          width: '18px',
                          height: '18px',
                          marginRight: '5px',
                        }}
                        src={
                          process.env.PUBLIC_URL + '/icons/locationIconRed.png'
                        }
                        alt={'Location Logo Not Found'}
                      />{' '}
                      Proefrit plannen
                    </Button>
                  </div>
                </div>
                <div className={ProductInformationStyle.bikeInformation}>
                  <Divider />
                  <div
                    className={ProductInformationStyle.bikeInformationListItem}
                  >
                    <span>Kleur:</span>
                    <span>Zwart</span>
                  </div>
                  <Divider />
                  <div
                    className={ProductInformationStyle.bikeInformationListItem}
                  >
                    <span>Versnellig:</span>
                    <span>Shimano 3x10</span>
                  </div>
                  <Divider />
                  <div
                    className={ProductInformationStyle.bikeInformationListItem}
                  >
                    <span>Vering:</span>
                    <span>Feathershock Voorvorkvering 30mm</span>
                  </div>
                  <Divider />
                  <div
                    className={ProductInformationStyle.bikeInformationListItem}
                  >
                    <span>Aandrijving:</span>
                    <span>Shimano Deore SLX M7000</span>
                  </div>
                  <Divider />
                  <div
                    className={ProductInformationStyle.bikeInformationListItem}
                  >
                    <span>Remmen:</span>
                    <span>Schijfremmen Hydrolisch Shimano MT201 160mm</span>
                  </div>
                  <Divider />
                  <div
                    className={ProductInformationStyle.bikeInformationListItem}
                  >
                    <span>Gewicht:</span>
                    <span>15,40 KG</span>
                  </div>
                  <Divider />
                </div>
              </div>
            </Col>
          </Row>
          <Row
            type={'flex'}
            justify="space-between"
            className={ProductInformationStyle.helpQuestionView}
          >
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
                        className={ProductInformationStyle.collapseNoButton}
                        ghost
                        type="primary"
                        shape="circle"
                      >
                        1
                      </Button>
                      <span>We zoeken de fiets die het best bij jouw past</span>
                      <Icon
                        style={{ marginLeft: '10px', color: 'red' }}
                        type={activeKey != 1 ? 'plus' : 'minus'}
                      />
                    </div>
                  }
                  key="1"
                >
                  <p>
                    We hebben al enorm veel tevreden klanten aan hun perfecte
                    fiets geholpen. Op basis van je noden vinden we samen de
                    perfecte fiets. Woon werk? Sportief? Super speed? Voor
                    ieders wat wils.
                  </p>
                </Panel>
                <Panel
                  showArrow={false}
                  header={
                    <div className={ProductInformationStyle.collapseRow}>
                      <Button
                        className={ProductInformationStyle.collapseNoButton}
                        ghost
                        type="primary"
                        shape="circle"
                      >
                        2
                      </Button>
                      <span>Opmeten maat en lichaamslengte</span>
                      <Icon
                        style={{ marginLeft: '10px', color: 'red' }}
                        type={activeKey != 2 ? 'plus' : 'minus'}
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
                        className={ProductInformationStyle.collapseNoButton}
                        ghost
                        type="primary"
                        shape="circle"
                      >
                        3
                      </Button>
                      <span>Proefrit</span>
                      <Icon
                        style={{ marginLeft: '10px', color: 'red' }}
                        type={activeKey != 3 ? 'plus' : 'minus'}
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
                        className={ProductInformationStyle.collapseNoButton}
                        ghost
                        type="primary"
                        shape="circle"
                      >
                        4
                      </Button>
                      <span>Opvolging, accessoires en onderhoud</span>
                      <Icon
                        style={{ marginLeft: '10px', color: 'red' }}
                        type={activeKey != 4 ? 'plus' : 'minus'}
                      />
                    </div>
                  }
                  key="4"
                >
                  <p>Example 4</p>
                </Panel>
              </Collapse>
            </div>
            <div style={{ margin: 'auto 0 20px auto' }}>
              <FeedBackComponent />
            </div>
          </Row>
        </Col>
        <Col span={2} />
      </Row>
    </Container>
  )
}
