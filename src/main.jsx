import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Login from './Login/Login.jsx';
import Root from './Root/Root.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children:[
      {
        path: "/",
        Component: Login ,

      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
