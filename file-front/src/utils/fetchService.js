import axios from 'axios'
import { REST_URL } from './path.js'

const API_URL = REST_URL

const fetchService = async (url, method = 'GET', variables) => {
  try {
    const headers = {
      'Content-Type': 'application/json'
    }

    const request = {
      headers,
      method
    }

    if (variables) request.data = variables

    const response = await axios(`${API_URL}/${url}`, request)

    return response.data
  } catch (err) {
    throw Error(JSON.stringify(err?.response?.data))
  }
}

export default fetchService
