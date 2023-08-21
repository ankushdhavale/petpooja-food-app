import { useState } from 'react';
import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {  RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Cart from './Pages/Cart';
import Error from './Pages/Error';
import Body from './components/Body'
import RestaurantMenu from './components/RestaurantMenu';
import Shimmer from './components/Shimmer';

const Instamart = lazy(()=>import("./Pages/Instamart"))

 

const appRouter = createBrowserRouter([

   {
    path: "/",
    element:<App/>,
    errorElement:<Error/>,
    children:[
       {
         path: "/",
         element:<Body />,
       },
       {
         path: "/about",
         element:<About/>,
       },
       {
         path: "/contact",
         element:<Contact/>,
       },
       {
         path: "/cart",
         element:<Cart/>,
       },
       {
         path: "/restaurant/:resId",
         element:<RestaurantMenu/>,
       },
       {
        path:"/instamart",
        element:<Suspense fallback={<Shimmer/>}
        ><Instamart/></Suspense>,
       }
    ]
  },
  
 ]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <>
          <RouterProvider router={appRouter}/>  
   </>
);




