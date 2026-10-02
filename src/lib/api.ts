import axios from 'axios'

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? '/api/v1',
  // Session lives in an HTTP-only cookie set by the backend.
  withCredentials: true,
})
