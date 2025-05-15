import axios from 'axios'

import { BASE_URL } from '@shared/const'

import { getAccessToken } from '@shared/utils/auth'

const axiosConfig = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: false
})

axiosConfig.interceptors.request.use((config) => {
  const accessToken = getAccessToken()

  if (typeof accessToken === 'string' && accessToken.length > 0) {
    config.headers.set('Authorization', `Bearer ${accessToken}`)
  }

  return config
}, async (error) => {
  return Promise.reject(error)
})

const axiosUploadConfig = axios.create({
  baseURL: BASE_URL,
  withCredentials: false,
  headers: {
    'Content-Type': 'multipart/form-data',
  }
})

export { axiosConfig, axiosUploadConfig }
