/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

it('renders without crashing', () => {
  const container = document.getElementById('root')
  const root = createRoot(container)
  root.render(<App />)
  root.unmountComponentAtNode()
})
