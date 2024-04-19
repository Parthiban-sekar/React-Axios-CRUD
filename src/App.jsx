import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppRoutes from './components/AppRoute'
export const API_URL = "https://6597a91a668d248edf23234d.mockapi.io/users"

const App = () => {
  const router = createBrowserRouter(AppRoutes)
  return (
  <>
  <RouterProvider router={router} />
  </>
  )
}

export default App