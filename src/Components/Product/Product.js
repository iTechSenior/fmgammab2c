import React from 'react'
import {
  Breadcrumb,
  Checkbox,
  Col,
  Descriptions,
  Input,
  Row,
  Button,
} from 'antd'
import * as appConstants from '../Utilities/AppConstants'
import ImageButtonComponent from '../Utilities/ImageButtonComponent/ImageButtonComponent'
import BikeListComponent from '../Utilities/BikeComponent/BikeListComponent'
import { navigate } from 'hookrouter'
import './Product.css'
import * as ProductStyle from './Product.module.scss'
import { useMediaPredicate } from 'react-media-hook'

import Container from '../Common/Container/ContainerComponent'

export default function Product(props) {
  // This what the api should at least respond with

  const isSmallScreenForMobile = useMediaPredicate('(max-width: 410px)')

  const bikeListInformation = [
    {
      imgSource: `${appConstants.frontEndEnvURL}/icons/HomePage/bikeExample.png`,
      bikeName: 'Gazelle 1',
      price: '999,00',
      availability: 'op voorraad',
      description: [
        {
          title: 'Snelheid van 25km/u',
        },
        {
          title: 'Motorpositie: Midden',
        },
        {
          title: 'Versnellingen: 5',
        },
      ],
    },
    {
      imgSource: `${appConstants.frontEndEnvURL}/icons/HomePage/bikeExample.png`,
      bikeName: 'Gazelle 2',
      price: '999,00',
      availability: 'op voorraad',
      description: [
        {
          title: 'Snelheid van 25km/u',
        },
        {
          title: 'Motorpositie: Midden',
        },
        {
          title: 'Versnellingen: 5',
        },
      ],
    },
    {
      imgSource: `${appConstants.frontEndEnvURL}/icons/HomePage/bikeExample.png`,
      bikeName: 'Gazelle 3',
      price: '999,00',
      availability: 'op voorraad',
      description: [
        {
          title: 'Snelheid van 25km/u',
        },
        {
          title: 'Motorpositie: Midden',
        },
        {
          title: 'Versnellingen: 5',
        },
      ],
    },
    {
      imgSource: `${appConstants.frontEndEnvURL}/icons/HomePage/bikeExample.png`,
      bikeName: 'Gazelle 4.',
      price: '999,00',
      availability: 'geen voorraad meer',
      description: [
        {
          title: 'Snelheid van 25km/u',
        },
        {
          title: 'Motorpositie: Midden',
        },
        {
          title: 'Versnellingen: 5',
        },
      ],
    },
    {
      imgSource: `${appConstants.frontEndEnvURL}/icons/HomePage/bikeExample.png`,
      bikeName: 'Gazelle 3',
      price: '999,00',
      availability: 'op voorraad',
      description: [
        {
          title: 'Snelheid van 25km/u',
        },
        {
          title: 'Motorpositie: Midden',
        },
        {
          title: 'Versnellingen: 5',
        },
      ],
    },
    {
      imgSource: `${appConstants.frontEndEnvURL}/icons/HomePage/bikeExample.png`,
      bikeName: 'Gazelle 3',
      price: '999,00',
      availability: 'op voorraad',
      description: [
        {
          title: 'Snelheid van 25km/u',
        },
        {
          title: 'Motorpositie: Midden',
        },
        {
          title: 'Versnellingen: 5',
        },
      ],
    },
    {
      ads: true,
      width: '305px',
      headerText: 'WELKE FIETS IS PERFECT VOOR JOU?',
      descriptionText: 'Sportief, functioneel of stijlvol?',
      buttonText: 'Help mij kiezen',
      imgBackgroundColor: '#EE3143',
      buttonTextColor: '#EE3143',
    },
    {
      ads: true,
      width: '305px',
      buttonVisibility: 'false',
      buttonTextColor: '#EE3143',
      imgSource: 'icons/HomePage/mBikeLogo.png',
    },
    {
      ads: true,
      width: '305px',
      buttonVisibility: 'false',
      buttonTextColor: '#EE3143',
      imgSource: 'icons/HomePage/mBikeLogo.png',
    },
    {
      ads: true,
      width: '305px',
      headerText: 'E-BIKE OF GEEN E-BIKE?',
      descriptionText: 'That’s the question. ',
      buttonText: 'Waar moet ik op letten? ',
      imgBackgroundColor: 'rgba(16, 100, 224, 0.48)',
      buttonTextColor: '#1064E0',
    },
    {
      imgSource: `${appConstants.frontEndEnvURL}/icons/HomePage/bikeExample.png`,
      bikeName: 'Gazelle 3',
      price: '999,00',
      availability: 'op voorraad',
      description: [
        {
          title: 'Snelheid van 45km/u',
        },
        {
          title: 'Motorpositie: Midden',
        },
        {
          title: 'Versnellingen: 5',
        },
      ],
    },
    {
      imgSource: `${appConstants.frontEndEnvURL}/icons/HomePage/bikeExample.png`,
      bikeName: 'Gazelle 3',
      price: '999,00',
      availability: 'op voorraad',
      description: [
        {
          title: 'Snelheid van 45km/u',
        },
        {
          title: 'Motorpositie: Midden',
        },
        {
          title: 'Versnellingen: 5',
        },
      ],
    },
  ]

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
                onClick={() => {
                  navigate('/')
                }}
              >
                <a>Fietsen</a>
              </Breadcrumb.Item>
              <Breadcrumb.Item>{props.productType}</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <Row gutter={[{ sm: 16, md: 24, lg: 32 }, 20]} type="flex">
            <Col xs={24} sm={12} md={6} lg={24}>
              <div className={ProductStyle.filterPanel}>
                <Descriptions column={1} title={'Snelheid'} colon={false}>
                  <Descriptions.Item label={<Checkbox />}>
                    45 km/u
                  </Descriptions.Item>
                  <Descriptions.Item label={<Checkbox />}>
                    25 km/u
                  </Descriptions.Item>
                </Descriptions>
              </div>
            </Col>
            <Col xs={24} sm={12} md={6} lg={24}>
              <div className={ProductStyle.filterPanel}>
                <Descriptions column={1} title={'Merk'} colon={false}>
                  <Descriptions.Item label={<Checkbox />}>
                    Scott
                  </Descriptions.Item>
                  <Descriptions.Item label={<Checkbox />}>
                    Koga
                  </Descriptions.Item>
                  <Descriptions.Item label={<Checkbox />}>
                    Bizobike
                  </Descriptions.Item>
                  <Descriptions.Item label={<Checkbox />}>
                    Gazelle
                  </Descriptions.Item>
                </Descriptions>
              </div>
            </Col>
            <Col xs={24} sm={12} md={6} lg={24}>
              <div className={ProductStyle.filterPanel}>
                <Descriptions column={1} title={'Prijs'} colon={false}>
                  <Descriptions.Item
                    label={<Input placeholder="€. Min" />}
                    className="descriptionInput"
                  />
                  <Descriptions.Item
                    label={<Input placeholder="€. Max" />}
                    className="descriptionInput"
                  />
                </Descriptions>
              </div>
            </Col>
            <Col xs={24} sm={12} md={6} lg={24}>
              <div className={ProductStyle.filterPanel}>
                <Descriptions column={1} title={'Gebruik'} colon={false}>
                  <Descriptions.Item label={<Checkbox />}>
                    Woon-werk
                  </Descriptions.Item>
                  <Descriptions.Item label={<Checkbox />}>
                    Hobby
                  </Descriptions.Item>
                  <Descriptions.Item label={<Checkbox />}>
                    Pro
                  </Descriptions.Item>
                  <Descriptions.Item label={<Checkbox />}>
                    Vrije tijd
                  </Descriptions.Item>
                </Descriptions>
              </div>
            </Col>
          </Row>
        </Col>
        <Col xs={24} sm={24} md={24} lg={18} xl={{ span: 18, offset: 1 }}>
          <div className={ProductStyle.colHeader}>
            <div className={ProductStyle.bikesGridViewHeader}>
              <span style={{ color: 'red', fontSize: '20px' }}>
                Onze {props.productType}
              </span>
              <Button>
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
              </Button>
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
              <BikeListComponent bikeData={bikeListInformation} />
            </Col>
          </Row>
        </Col>
        <Col span={1} />
      </Row>
    </Container>
  )
}
