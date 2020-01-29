import axios from 'axios'
import { backEndEnvURL } from '../Components/Utilities/AppConstants'

export const axiosInstance = axios.create({
  baseURL: backEndEnvURL,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
  },
})
