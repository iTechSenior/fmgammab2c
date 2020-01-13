import { axiosInstance } from '../axios/axiosInstances'

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
