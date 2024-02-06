import React from 'react'
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import CardsContainer from './components/CardContainer';
import Aboutus from './components/Aboutus';
import Contactus from './components/Contactus';
import Error404 from './components/Error404';


const AppLayout = () =>{
   return (
        <div className='main'>
            <Header/>
            <CardsContainer/>
        </div>
    )
}
const router = createBrowserRouter([
    {
        path:'/',
        element : <AppLayout/>,
        errorElement : <Error404/>

    },
    {
        path:'/aboutus',
        element : <Aboutus/>
    },
    {
        path:'/contactus',
        element : <Contactus/>
    },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={router}/>)