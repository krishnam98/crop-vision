import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css"
import { createBrowserRouter, RouterProvider } from 'react-router'
import SoilReport from './Components/SoilReport.jsx'
import Crops from './Components/Crops.jsx'
import cvStore from './store/Redux.js'
import { Provider } from 'react-redux'

const router = createBrowserRouter([
  {
    path: "/", element: <App />,
    children: [
      { path: "/Report", element: <SoilReport /> },
      { path: "/Crops", element: <Crops /> }
    ]
  },

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={cvStore}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
