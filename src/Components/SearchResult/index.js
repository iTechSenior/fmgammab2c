import React, { useEffect, useState } from 'react'
import { navigate, useQueryParams } from 'hookrouter'
import { Col, Row } from 'antd'
import _ from 'lodash'
import * as FietsenMintjensAPI from '../../api/FietsenMintjensAPI'
import * as appConstants from '../Utilities/AppConstants'

import Container from '../Common/Container/ContainerComponent'
import BikeListComponent from '../Utilities/BikeComponent/BikeListComponent'

import * as SearchResultStyle from './SearchResult.module.scss'
import './SearchResult.css'

export default function Search() {
  const [searchResults, setSearchResults] = useState()
  const [queryParams, setQueryParams] = useQueryParams()

  useEffect(() => {
    if (queryParams.keyword)
      FietsenMintjensAPI.getSearchResults(queryParams.keyword)
        .then(res => {
          if (!_.isEqual(searchResults, res.data)) setSearchResults(res.data)
        })
        .catch(err => console.log(err))
  })

  const gridStyle = {
    gutter: 16,
    xs: 1,
    sm: 2,
    md: 2,
    lg: 3,
    xl: 4,
    xxl: 4,
  }

  const handleMoreInfoBtnClick = id => {
    const selectedBikeData = searchResults.find(item => item._id === id)
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

  return (
    <Container>
      <Row
        gutter={[{ xs: 12, sm: 16, md: 24, lg: 32 }, 20]}
        className={SearchResultStyle.mainViewContainer}
      >
        <Col span={24}>
          <div
            class={SearchResultStyle.pageHeaderText}
          >{`Zoekresultaten voor "${queryParams.keyword}"`}</div>
          <BikeListComponent
            gridStyle={gridStyle}
            onMoreInfoBtnClick={id => handleMoreInfoBtnClick(id)}
            bikeData={searchResults}
          />
        </Col>
      </Row>
    </Container>
  )
}
