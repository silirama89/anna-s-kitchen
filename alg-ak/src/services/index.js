import axios from 'axios'

export const CLIENTS_URL =
  `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/clients`

export const MENU_URL =
  `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/menu`

export const REVIEWS_URL =
  `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/reviews`


export const config = {
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
  }
}

export const grabMenu = async () => {
  const response = await axios.get(MENU_URL, config)
  return response.data.records
}

export const grabReviews = async () => {
  const response = await axios.get(REVIEWS_URL, config)
  return response.data.records
}

export const postClients = async (body) => {
  const response = await axios.post(CLIENTS_URL, { fields: body }, config)
  return response.data
}
