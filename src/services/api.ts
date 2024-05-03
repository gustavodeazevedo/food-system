import axios from 'axios'

import { SnackData } from '../interfaces/SnackData'

const api = axios.create({
  baseURL: 'https://food-system-nine.vercel.app'
})

export const getBurgers = () => api.get<SnackData[]>('/burgers')
export const getPizzas = () => api.get<SnackData[]>('/pizzas')
export const getDrinks = () => api.get<SnackData[]>('/drinks')
export const getIceCreams = () => api.get<SnackData[]>('/ice-creams')

export default api
