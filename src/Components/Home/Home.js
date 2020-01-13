import React from 'react'
import { Button, Col, Descriptions, Icon, List, Row } from 'antd'
import Container from '../Common/Container/ContainerComponent'
import './HomeStyle.css'
import * as HomeStyle from './Home.module.scss'
import * as appConstants from '../Utilities/AppConstants'
import ImageButtonComponent from '../Utilities/ImageButtonComponent/ImageButtonComponent'
import BikeListComponent from '../Utilities/BikeComponent/BikeListComponent'
import { navigate } from 'hookrouter'

export default function Home() {
  /*    useEffect(()=>{
            // Testing API Request
            FietsenMintjensAPI.loginAsAdmin();
            FietsenMintjensAPI.getBikeCategories('e-bikes').then((res)=>{
            }).catch((fail=>console.log(fail)));
        },);*/

  const gridListStyle = {
    gutter: 16,
    xs: 1,
    sm: 2,
    md: 2,
    lg: 2,
    xl: 2,
    xxl: 2,
  }
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
      bikeName: 'Gazelle 5',
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
      bikeName: 'Gazelle 6',
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
      bikeName: 'Gazelle 7',
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
      bikeName: 'Gazelle 8',
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
        className={HomeStyle.mainViewContainer}
      >
        <Col xs={24} sm={24} md={24} lg={6} xl={5} className={'bikeCategories'}>
          <div style={{ backgroundColor: 'white' }}>
            <Descriptions
              column={{ xs: 1, sm: 2, md: 3, lg: 1 }}
              title={'Categorieën'}
              colon={false}
            >
              <Descriptions.Item
                label={<Icon component={appConstants.eBikeImage} />}
              >
                <Button
                  onClick={() => {
                    navigate(`/products/${appConstants.bikesCategories.eBike}`)
                  }}
                  type={'link'}
                >
                  {appConstants.bikesCategories.eBike}
                </Button>
              </Descriptions.Item>
              <Descriptions.Item
                label={<Icon component={appConstants.eBikeImage} />}
              >
                <Button
                  onClick={() => {
                    navigate(
                      `/products/${appConstants.bikesCategories.sportBike}`
                    )
                  }}
                  type={'link'}
                >
                  {appConstants.bikesCategories.sportBike}
                </Button>
              </Descriptions.Item>
              <Descriptions.Item
                label={<Icon component={appConstants.eBikeImage} />}
              >
                <Button
                  onClick={() => {
                    navigate(
                      `/products/${appConstants.bikesCategories.cityBike}`
                    )
                  }}
                  type={'link'}
                >
                  {appConstants.bikesCategories.cityBike}
                </Button>
              </Descriptions.Item>
              <Descriptions.Item
                label={<Icon component={appConstants.eBikeImage} />}
              >
                <Button
                  onClick={() => {
                    navigate(
                      `/products/${appConstants.bikesCategories.mountainBike}`
                    )
                  }}
                  type={'link'}
                >
                  {appConstants.bikesCategories.mountainBike}
                </Button>
              </Descriptions.Item>
              <Descriptions.Item
                label={<Icon component={appConstants.eBikeImage} />}
              >
                <Button
                  onClick={() => {
                    navigate(`/accessories/`)
                  }}
                  type={'link'}
                >
                  {appConstants.accessories}
                </Button>
              </Descriptions.Item>
            </Descriptions>
          </div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={18} xl={{ span: 18, offset: 1 }}>
          <Row gutter={[{ xs: 12, sm: 16, md: 24 }, 20]}>
            <Col span={24}>
              <Row
                gutter={[{ xs: 12, sm: 16, md: 24 }, 20]}
                type="flex"
                justify="center"
              >
                <Col style={{ flex: 1 }}>
                  <img
                    src={`${appConstants.frontEndEnvURL}/icons/HomePage/headerBike.png`}
                    width={'100%'}
                    height={'240px'}
                    style={{ minWidth: 220 }}
                    alt="Header Bike  Not Found"
                  />
                </Col>
                <Col>
                  <ImageButtonComponent
                    width={'274px'}
                    height={'239px'}
                    headerText={'“HUIDIGE PROMOTIE”'}
                    descriptionText={'Lopende deals'}
                    buttonText={'Vind jouw winkel'}
                    imgSrc={'icons/HomePage/currentPromotionImage.png'}
                    buttonTextColor={'#0BB143'}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row gutter={[{ xs: 12, sm: 16, md: 24 }, 20]}>
            <Col span={24}>
              <Row
                style={{
                  backgroundColor: 'white',
                  borderBottom: '3px solid red',
                  padding: 20,
                }}
              >
                <Col
                  className={'bikeCategories'}
                  xs={24}
                  sm={24}
                  md={12}
                  lg={13}
                  xl={10}
                >
                  <List
                    header={'Populairste merken'}
                    grid={gridListStyle}
                    className={'popularBrands commonHeader'}
                    dataSource={[
                      { image: appConstants.gazelleImage },
                      { image: appConstants.scottImage },
                      { image: appConstants.stromerImage },
                      { image: appConstants.cubeImage },
                    ]}
                    renderItem={item => (
                      <List.Item>
                        <Icon component={item.image} />
                      </List.Item>
                    )}
                  />
                </Col>
                <Col
                  xs={24}
                  sm={24}
                  md={12}
                  lg={11}
                  xl={{ span: 13, offset: 1 }}
                >
                  <List
                    header={'Alle merken'}
                    grid={{
                      gutter: 16,
                      xs: 2,
                      sm: 2,
                      md: 3,
                      lg: 3,
                      xl: 3,
                      xxl: 3,
                    }}
                    className={'commonHeader'}
                    dataSource={[
                      { text: 'Scott (20)' },
                      { text: 'Gazelle (39)' },
                      { text: 'Koga (12)' },
                      { text: 'Stromer (15)' },
                      { text: 'Scott (20)' },
                      { text: 'Scott (20)' },
                      { text: 'Scott (20)' },
                      { text: 'Scott (20)' },
                      { text: 'Scott (20)' },
                      { text: 'Scott (20)' },
                      { text: 'Scott (20)' },
                      { text: 'Scott (20)' },
                    ]}
                    renderItem={item => (
                      <List.Item>
                        <div>{item.text}</div>
                      </List.Item>
                    )}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row gutter={[{ xs: 12, sm: 16, md: 24 }, 20]}>
            <Col span={24}>
              <BikeListComponent bikeData={bikeListInformation} />
            </Col>
          </Row>

          {/* <Row
            className={'bikeHelperAds'}
            gutter={[{ xs: 12, sm: 16, md: 24 }, 20]}
          >
            <Col span={24}>
              <List
                grid={{
                  gutter: 12,
                  xs: 1,
                  sm: 1,
                  md: 2,
                  lg: 2,
                  xl: 2,
                  xxl: 3,
                }}
                dataSource={[
                  {
                    headerText: 'WELKE FIETS IS PERFECT VOOR JOU?',
                    descriptionText: 'Sportief, functioneel of stijlvol?',
                    buttonText: 'Help mij kiezen',
                    imgBackgroundColor: '#EE3143',
                    buttonTextColor: '#EE3143',
                  },
                  {
                    buttonVisibility: 'false',
                    buttonTextColor: '#EE3143',
                    imgSource: 'icons/HomePage/mBikeLogo.png',
                  },
                  {
                    headerText: 'E-BIKE OF GEEN E-BIKE?',
                    descriptionText: 'That’s the question. ',
                    buttonText: 'Waar moet ik op letten? ',
                    imgBackgroundColor: 'rgba(16, 100, 224, 0.48)',
                    buttonTextColor: '#1064E0',
                  },
                ]}
                renderItem={item => (
                  <List.Item>
                    <ImageButtonComponent
                      width={'373px'}
                      height={'214px'}
                      headerText={item.headerText}
                      descriptionText={item.descriptionText}
                      buttonText={item.buttonText}
                      buttonVisibility={item.buttonVisibility}
                      imgBackgroundColor={item.imgBackgroundColor}
                      imgSrc={item.imgSource}
                      EE3143
                      buttonTextColor={item.buttonTextColor}
                    />
                  </List.Item>
                )}
              />
            </Col>
          </Row> */}
          <Row
            className={'bikeCategories'}
            style={{ paddingTop: '20px', paddingBottom: '20px' }}
          >
            <Col span={24}>
              <Row type="flex" style={{ backgroundColor: 'white' }}>
                <Col xs={24} sm={24} md={17} lg={17} style={{ minWidth: 270 }}>
                  <img
                    width={'100%'}
                    alt={'Location  are not available'}
                    src={`${appConstants.frontEndEnvURL}/icons/HomePage/fietsenLocation.png`}
                    style={{ minHeight: 435 }}
                  />
                </Col>
                <Col xs={24} sm={24} md={7} lg={7}>
                  <div style={{ backgroundColor: 'white' }}>
                    <List
                      header={'Ontdek onze winkels'}
                      className={'commonHeader locationContainer'}
                      dataSource={[
                        {
                          locationHeader: 'Kerkstraat 21',
                          locationDescription: '2970 Schilde',
                        },
                        {
                          locationHeader: 'Brechtsebaan 2',
                          locationDescription: '2960 Sint-Job-in-’t-Goor',
                        },
                        {
                          locationHeader: 'Brendabaan 706',
                          locationDescription: '2100 Antwerpen',
                        },
                        {
                          locationHeader: 'Stationstraat 34',
                          locationDescription: '2950 Kapellen',
                        },
                      ]}
                      grid={{
                        gutter: 16,
                        xs: 1,
                        sm: 2,
                        md: 1,
                      }}
                      renderItem={item => (
                        <List.Item>
                          <p style={{ fontWeight: 'bold' }}>
                            {item.locationHeader}
                          </p>
                          <p>{item.locationDescription}</p>
                        </List.Item>
                      )}
                    />
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}
