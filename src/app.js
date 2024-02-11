import React,{lazy,Suspense,useEffect,useState} from 'react'
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom';
import CardsContainer from './components/CardContainer';
//import Aboutus from './components/Aboutus';
import Contactus from './components/Contactus';
import Error404 from './components/Error404';
import RestaurentDetails from './components/CountryDetails';
import Shimmer from './components/Shimmer';
import UserContext from './utils/UserContext';


const Aboutus = lazy(()=>import('./components/Aboutus'))
const AppLayout = () =>{
    const [name,setName] = useState('')
    useEffect(()=>{
        setName('ra')
        console.log('hello');
    },[])
   return (
            
        <UserContext.Provider value={{user:name, setName}}>
            <div className="app">
                <Header />
                <Outlet />
            </div>
        </UserContext.Provider>
    
        
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
                element : <Suspense fallback={"hello"}><Aboutus/></Suspense>
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