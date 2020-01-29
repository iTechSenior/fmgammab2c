import React from 'react'
import Home from './Components/Home/Home'
import SearchResult from './Components/SearchResult'
import ProductInformation from './Components/ProductInformation/ProductInformation'
import Product from './Components/Product/Product'
import * as AppConstants from './Components/Utilities/AppConstants'

const routes = {
  '/': () => <Home />,
  '/products/search': () => <SearchResult />,
  '/products/:category': ({ category }) => {
    let productTypeFound = true
    switch (category) {
      case AppConstants.bikesCategories.eBike:
        break
      case AppConstants.bikesCategories.mountainBike:
        break
      case AppConstants.bikesCategories.cityBike:
        break
      case AppConstants.bikesCategories.raceBike:
        break
      case AppConstants.bikesCategories.vouwBike:
        break
      case AppConstants.bikesCategories.accessoires:
        break
      default:
        productTypeFound = false
    }
    return productTypeFound ? <Product productCategory={category} /> : false
  },
  // '/product/:id': ({ id }) => <ProductInformation productId={id} />,
  '/products/:category/:id': ({ category, id }) => {
    let productTypeFound = true
    switch (category) {
      case AppConstants.bikesCategories.eBike:
        break
      case AppConstants.bikesCategories.mountainBike:
        break
      case AppConstants.bikesCategories.cityBike:
        break
      case AppConstants.bikesCategories.raceBike:
        break
      case AppConstants.bikesCategories.vouwfiets:
        break
      case AppConstants.bikesCategories.accessoires:
        break
      default:
        productTypeFound = false
    }
    return productTypeFound ? (
      <ProductInformation productId={id} productCategory={category} />
    ) : (
      false
    )
  },
}
export default routes
