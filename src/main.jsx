import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Register from './pages/Register/Register';
import AuthProvider from './providers/AuthProvider';
import { ToastContainer } from 'react-toastify';
import Faq from './pages/Faq/Faq';
import PrivateRoutes from './PrivateRoutes/PrivateRoutes';
import FeaturedDetails from './pages/FeaturedDetails/FeaturedDetails';
import UpdateProfile from './pages/UpdateProfile/UpdateProfile';
import Contact from './pages/Contact/Contact';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path:'/update',
        element: <PrivateRoutes><UpdateProfile></UpdateProfile></PrivateRoutes>

      },
      {
        path:'/faq',
        element:<PrivateRoutes><Faq></Faq></PrivateRoutes>
      },
      {
        path:'/contact',
        element: <Contact></Contact>

      },
      {
        path:'/card/:id',
        element:<PrivateRoutes><FeaturedDetails></FeaturedDetails></PrivateRoutes>,
        loader:() => fetch('/data.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 
    <AuthProvider>
      
       <RouterProvider router={router} />
        
      
       </AuthProvider>
    
    <ToastContainer />
  </React.StrictMode>,
)
