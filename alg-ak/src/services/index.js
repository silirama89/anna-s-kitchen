import axios from 'axios'

export const CLIENTS_URL =
  `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/clients`

export const MENU_URL =
  `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/clients`


export const config = {
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
  }
}



export const grabClients = async () => {
  const response = await axios.get(CLIENTS_URL, config)
  return response.data.records
}

export const postClients = async (body) => {
  const response = await axios.post(CLIENTS_URL, { fields: body }, config)
  return response.data
}

export const editChirp = async (body, id) => {
  const response = await axios.put(`${BASE_URL}/${id}`, { fields: body }, config)
  return response.data
}

export const deleteChirp = async (id) => {
  const response = await axios.delete(`${BASE_URL}/${id}`, config)
  return response.data
}