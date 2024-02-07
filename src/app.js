import React from 'react'
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom';
import CardsContainer from './components/CardContainer';
import Aboutus from './components/Aboutus';
import Contactus from './components/Contactus';
import Error404 from './components/Error404';
import RestaurentDetails from './components/CountryDetails';


const AppLayout = () =>{
   return (
        <div className='w-full'>
            <Header/>
            <Outlet/>
        </div>
    )
}
const router = createBrowserRouter([

    {
        path:'/',
        element : <AppLayout/>,
        children : [
            {
                path:'/',
                element : <CardsContainer/>
            },
            {
                path:'/aboutus',
                element : <Aboutus/>
            },
            {
                path:'/contactus',
                element : <Contactus/>
            },
            {
                path:'/details/:name',
                element : <RestaurentDetails/>
            },
        ],
        errorElement : <Error404/>

    }
    
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={router}/>)