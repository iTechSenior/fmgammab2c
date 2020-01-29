import { axiosInstance } from '../axios/axiosInstances'
import qs from 'qs'

let params = new URLSearchParams()
params.set('email', 'admin@admin.com')
params.set('password', 'admin007')

export const loginAsAdmin = () => {
  return axiosInstance.post('/login', params, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
}
export const getBikeCategories = bikeCategoryType => {
  return axiosInstance.get(
    `/shop/${bikeCategoryType}?sort=priceUp&geslacht=&type=`,
    {
      withCredentials: true,
      headers: { cookie: document.cookie },
    }
  )
}

export const getProducts = () => {
  return axiosInstance.get(`/products`)
}

export const getProductsByCategory = (productType, state) => {
  return axiosInstance.get(`/products/${productType}`, {
    params: {
      type: state.type,
      speed: state.speed,
      brand: state.brand,
      minPrice: state.minPrice,
      maxPrice: state.maxPrice,
      usage: state.usage,
    },
  })
}

export const getProductsById = (productCategory, productId) => {
  return axiosInstance.get(`/products/${productCategory}/${productId}`, {
    params: {
      category: productCategory,
    },
  })
}

export const getSearchResults = searchKeyword => {
  return axiosInstance.get(`/products/searchResults`, {
    params: {
      search: searchKeyword,
    },
  })
}

export const submitEmail = values => {
  return axiosInstance.post(`/submitEmail`, qs.stringify(values))
}
