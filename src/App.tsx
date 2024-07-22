import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {Toaster} from 'sonner';
import Home from './Pages/Home';
import Error from './Pages/Error';
import Register from './Pages/Register';
import About from './Pages/About';
import Booking from './Pages/Booking';
import Login from './Pages/Login ';
import Vehicles from './Pages/Vehicles';
import UserCarPage from './Pages/Userp';
import AdminPage from './Pages/Admin';
import LoginForms from './Components/Login';
import Logins from './Pages/Login/Login';
import Users from './Pages/Users';
import './App.css'
import Me from './Pages/Me';
import PaymentForm from './Pages/Stripe';
import BookingHistory from './Pages/History';
import Success from './Pages/Success';
import Contact from './Pages/Contact';
import Layout from './Components/Layout';



const App: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout> <Home /></Layout>,
      errorElement: <Error />,
    },
    {
      path: 'register',
      element: <Register />,
      errorElement: <Error />,
    },
    {
      path: 'about',
      element:<Layout> <About/></Layout>,
      errorElement: <Error />,
    },
    {
      path: 'Booking',
      element: <Booking />,
      errorElement: <Error />,
    },
    {
      path: 'nnn',
      element: <Login />,
      errorElement: <Error />,
    },
    {
      path: 'Vehicles',
      element:<Layout> <Vehicles /></Layout>,
      errorElement: <Error />,
    },
    {
      path: 'Userprofile',
      element: <UserCarPage />,
      errorElement: <Error />,
    },
    {
      path: 'Admin',
      element: <AdminPage/>,
      errorElement: <Error />,
    },
    {
      path: 'mmm',
      element: <LoginForms/>,
      errorElement: <Error />,
    },
    {
      path: 'login',
      element: <Logins/>,
      errorElement: <Error />,
    },
    {
      path: 'Me',
      element: <Me/>,
      errorElement: <Error />,
    },
    {
      path: 'uuu',
      element: <Users/>,
      errorElement: <Error />,
    },
    {
      path: 'payment',
      element: <PaymentForm/>,
      errorElement: <Error />,
    },
{
  path: 'Booking/:vehicleId',
  element: <Booking />,
  errorElement: <Error />,
},
{
  path: 'history',
  element: <BookingHistory />,
  errorElement: <Error />,
},
{
  path: 'success',
  element: <Success />,
  errorElement: <Error />,
},
{
  path: 'contact',
  element:<Layout> <Contact /></Layout>,
  errorElement: <Error />,
},
  ]);
 
  return (
    <>
    <RouterProvider router={router} />
    <Toaster 
    position='top-right'
    toastOptions={{
      classNames: {
        error: 'bg-red-400',
        success: 'text-green-400',
        warning: 'text-yellow-400',
        info: 'bg-blue-400',
      }
    }}
    />
    </>
  );
};

export default App;