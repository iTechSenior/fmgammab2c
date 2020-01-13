import React from 'react'
import Home from './Components/Home/Home'
import ProductInformation from './Components/ProductInformation/ProductInformation'
import Product from './Components/Product/Product'
import * as AppConstants from './Components/Utilities/AppConstants'

const routes = {
  '/': () => <Home />,
  '/products/:type': ({ type }) => {
    let productTypeFound = true
    switch (type) {
      case AppConstants.bikesCategories.eBike:
        break
      case AppConstants.bikesCategories.mountainBike:
        break
      case AppConstants.bikesCategories.cityBike:
        break
      case AppConstants.bikesCategories.sportBike:
        break
      default:
        productTypeFound = false
    }
    return productTypeFound ? <Product productType={type} /> : false
  },
  '/products/:type/:id': ({ type, id }) => {
    let productTypeFound = true
    switch (type) {
      case AppConstants.bikesCategories.eBike:
        break
      case AppConstants.bikesCategories.mountainBike:
        break
      case AppConstants.bikesCategories.cityBike:
        break
      case AppConstants.bikesCategories.sportBike:
        break
      default:
        productTypeFound = false
    }
    return productTypeFound ? (
      <ProductInformation productId={id} productType={type} />
    ) : (
      false
    )
  },
}
export default routes
