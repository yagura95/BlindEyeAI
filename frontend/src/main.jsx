import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { 
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"

import Homepage from "./components/Homepage/Homepage.jsx"
import Training from "./components/Training/Training.jsx"
import Testing from "./components/Testing/Testing.jsx"
import Docs from "./components/Docs/Docs.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />
  },
  {
    path: "/training",
    element: <Training />
  },
  {
    path: "/testing",
    element: <Testing />
  },
  {
    path: "/docs",
    element: <Docs />
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
