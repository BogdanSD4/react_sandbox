import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from '@/pages/home/HomePage'
import '@/assets/css/main/global.scss'
import { BaseHeader } from '@/components/BaseHeader'

const router = createBrowserRouter([
  {
    path: '/',
    Component: HomePage,
  },
])

export default function App() {
  return (
    <>
      <BaseHeader />
      <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
    </>
  )
}

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose())
}
