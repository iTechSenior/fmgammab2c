import React, { useEffect, useState } from 'react'
import { navigate, useQueryParams } from 'hookrouter'
import { Button, Col, Descriptions, Icon, List, Row } from 'antd'
import _ from 'lodash'
import * as appConstants from '../Utilities/AppConstants'
import * as FietsenMintjensAPI from '../../api/FietsenMintjensAPI'

import Container from '../Common/Container/ContainerComponent'
import ImageButtonComponent from '../Utilities/ImageButtonComponent/ImageButtonComponent'
import BikeListComponent from '../Utilities/BikeComponent/BikeListComponent'

import * as HomeStyle from './Home.module.scss'
import './HomeStyle.css'

export default function Home() {
  const [productsData, setProductsData] = useState()

  useEffect(() => {
    FietsenMintjensAPI.getProducts()
      .then(res => {
        if (!_.isEqual(productsData, res.data)) {
          setProductsData(res.data)
        }
        console.log(res.data)
      })
      .catch(err => console.log(err))
  })

  const [queryParams, setQueryParams] = useQueryParams()

  const gridListStyle = {
    gutter: 16,
    xs: 1,
    sm: 2,
    md: 2,
    lg: 2,
    xl: 2,
    xxl: 2,
  }

  const bikeCompGridStyle = {
    gutter: 16,
    xs: 1,
    sm: 2,
    md: 2,
    lg: 2,
    xl: 3,
    xxl: 3,
  }
  const bikeListInformation = [
    {
      id: 1,
      productType: 'E-Bikes',
      image: `${appConstants.frontEndEnvURL}/icons/HomePage/bikeExample.png`,
      name: 'Gazelle 1',
      price: '999,00',
      availability: 'op voorraad',
      usps: ['Snelheid van 25km/u', 'Motorpositie: Midden', 'Versnellingen: 5'],
    },
    {
      id: 2,
      productType: 'E-Bikes',
      image: `${appConstants.frontEndEnvURL}/icons/HomePage/bikeExample.png`,
      name: 'Gazelle 2',
      price: '999,00',
      availability: 'op voorraad',
      usps: ['Snelheid van 25km/u', 'Motorpositie: Midden', 'Versnellingen: 5'],
    },
    {
      id: 3,
      productType: 'E-Bikes',
      image: `${appConstants.frontEndEnvURL}/icons/HomePage/bikeExample.png`,
      name: 'Gazelle 3',
      price: '999,00',
      availability: 'op voorraad',
      usps: ['Snelheid van 25km/u', 'Motorpositie: Midden', 'Versnellingen: 5'],
    },
    {
      id: 4,
      productType: 'E-Bikes',
      image: `${appConstants.frontEndEnvURL}/icons/HomePage/bikeExample.png`,
      name: 'Gazelle 4.',
      price: '999,00',
      availability: 'geen voorraad meer',
      usps: ['Snelheid van 25km/u', 'Motorpositie: Midden', 'Versnellingen: 5'],
    },
    {
      id: 5,
      productType: 'E-Bikes',
      image: `${appConstants.frontEndEnvURL}/icons/HomePage/bikeExample.png`,
      name: 'Gazelle 5',
      price: '999,00',
      availability: 'op voorraad',
      usps: ['Snelheid van 25km/u', 'Motorpositie: Midden', 'Versnellingen: 5'],
    },
    {
      id: 6,
      productType: 'E-Bikes',
      image: `${appConstants.frontEndEnvURL}/icons/HomePage/bikeExample.png`,
      name: 'Gazelle 6',
      price: '999,00',
      availability: 'op voorraad',
      usps: ['Snelheid van 25km/u', 'Motorpositie: Midden', 'Versnellingen: 5'],
    },
    {
      id: 7,
      productType: 'E-Bikes',
      image: `${appConstants.frontEndEnvURL}/icons/HomePage/bikeExample.png`,
      name: 'Gazelle 7',
      price: '999,00',
      availability: 'op voorraad',
      usps: ['Snelheid van 45km/u', 'Motorpositie: Midden', 'Versnellingen: 5'],
    },
    {
      id: 8,
      productType: 'E-Bikes',
      image: `${appConstants.frontEndEnvURL}/icons/HomePage/bikeExample.png`,
      name: 'Gazelle 8',
      price: '999,00',
      availability: 'op voorraad',
      usps: ['Snelheid van 45km/u', 'Motorpositie: Midden', 'Versnellingen: 5'],
    },
  ]

  const handleMoreInfoBtnClick = id => {
    const selectedBikeData = productsData.find(item => item._id === id)
    let productCategory
    if (selectedBikeData.categories[0] === 'accessoires') {
      productCategory = appConstants.bikesCategories.accessoires
    } else if (selectedBikeData.categories[0] === 'fietsen') {
      productCategory =
        selectedBikeData.categories[1] === 'e-bikes'
          ? selectedBikeData.categories[1].charAt(0).toUpperCase() +
            '-' +
            selectedBikeData.categories[1].charAt(2).toUpperCase() +
            selectedBikeData.categories[1].slice(3)
          : selectedBikeData.categories[1].charAt(0).toUpperCase() +
            selectedBikeData.categories[1].slice(1)
    }
    navigate(`/products/${productCategory}/${id}`)
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

  const navigateToProductScreenByCategory = category => {
    setQueryParams({}, true)
    navigate(`/products/${category}`)
  }

  const onBrandItemClick = text => {
    setQueryParams({ key: 'brand', value: text }, true)
    navigate(`/products/${appConstants.bikesCategories.eBike}`, false)
  }

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
                label={
                  <Icon
                    className={HomeStyle.categoryIcon}
                    component={appConstants.eBikeImage}
                  />
                }
              >
                <Button
                  onClick={() =>
                    navigateToProductScreenByCategory(
                      appConstants.bikesCategories.eBike
                    )
                  }
                  type={'link'}
                >
                  {appConstants.bikesCategories.eBike}
                </Button>
              </Descriptions.Item>

              <Descriptions.Item
                label={
                  <Icon
                    className={HomeStyle.categoryIcon}
                    component={appConstants.cityBikeImage}
                  />
                }
              >
                <Button
                  onClick={() =>
                    navigateToProductScreenByCategory(
                      appConstants.bikesCategories.cityBike
                    )
                  }
                  type={'link'}
                >
                  {appConstants.bikesCategories.cityBike}
                </Button>
              </Descriptions.Item>
              <Descriptions.Item
                label={
                  <Icon
                    className={HomeStyle.categoryIcon}
                    component={appConstants.mountainBikeImage}
                  />
                }
              >
                <Button
                  onClick={() =>
                    navigateToProductScreenByCategory(
                      appConstants.bikesCategories.mountainBike
                    )
                  }
                  type={'link'}
                >
                  {appConstants.bikesCategories.mountainBike}
                </Button>
              </Descriptions.Item>
              <Descriptions.Item
                label={
                  <Icon
                    className={HomeStyle.categoryIcon}
                    component={appConstants.raceBikeImage}
                  />
                }
              >
                <Button
                  onClick={() =>
                    navigateToProductScreenByCategory(
                      appConstants.bikesCategories.raceBike
                    )
                  }
                  type={'link'}
                >
                  {appConstants.bikesCategories.raceBike}
                </Button>
              </Descriptions.Item>
              <Descriptions.Item
                label={
                  <Icon
                    className={HomeStyle.categoryIcon}
                    component={appConstants.vouwBikeImage}
                  />
                }
              >
                <Button
                  onClick={() =>
                    navigateToProductScreenByCategory(
                      appConstants.bikesCategories.vouwBike
                    )
                  }
                  type={'link'}
                >
                  {appConstants.bikesCategories.vouwBike}
                </Button>
              </Descriptions.Item>
              <Descriptions.Item
                label={
                  <Icon
                    className={HomeStyle.categoryIcon}
                    component={appConstants.accessoriesImage}
                  />
                }
              >
                <Button
                  onClick={() =>
                    navigateToProductScreenByCategory(
                      appConstants.bikesCategories.accessoires
                    )
                  }
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
                      { image: appConstants.gazelleImage, brand: 'Gazelle' },
                      { image: appConstants.scottImage, brand: 'Scott' },
                      { image: appConstants.stromerImage, brand: '' },
                      { image: appConstants.cubeImage, brand: '' },
                    ]}
                    renderItem={item => (
                      <List.Item>
                        <Icon
                          component={item.image}
                          onClick={() => onBrandItemClick(item.brand)}
                        />
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
                      { text: 'Scott' },
                      { text: 'Gazelle' },
                      { text: 'Koga' },
                      { text: 'Stromer' },
                      { text: 'Scott' },
                      { text: 'Scott' },
                      { text: 'Scott' },
                      { text: 'Scott' },
                      { text: 'Scott' },
                      { text: 'Scott' },
                      { text: 'Scott' },
                      { text: 'Scott' },
                    ]}
                    renderItem={item => (
                      <List.Item>
                        <Button
                          onClick={() => onBrandItemClick(item.text)}
                          type={'link'}
                          style={{ color: 'rgba(0, 0, 0, 0.65)' }}
                        >
                          {item.text}
                        </Button>
                      </List.Item>
                    )}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row gutter={[{ xs: 12, sm: 16, md: 24 }, 20]}>
            <Col span={24}>
              <BikeListComponent
                gridStyle={bikeCompGridStyle}
                onMoreInfoBtnClick={id => handleMoreInfoBtnClick(id)}
                bikeData={productsData}
              />
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
          {/* <Row
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
          </Row> */}
        </Col>
      </Row>
    </Container>
  )
}
