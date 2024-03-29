import React,{lazy,Suspense,useEffect,useState} from 'react'
import ReactDOM from 'react-dom/client';
import Header from './src/components/Header';
import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom';
import CardsContainer from './src/components/CardContainer';
//import Aboutus from './components/Aboutus';
import Contactus from './src/components/Contactus';
import Error404 from './src/components/Error404';
import RestaurentDetails from './src/components/CountryDetails';
import Shimmer from './src/components/Shimmer';
import UserContext from './src/utils/UserContext';
import { Provider } from 'react-redux';
import appStore from './src/utils/appStore';
import Favorites from './src/components/Favorites';


const Aboutus = lazy(()=>import('./src/components/Aboutus'))
const AppLayout = () =>{
    const [name,setName] = useState('')
    useEffect(()=>{
        setName('ra')
    },[])
   return (
        <Provider store={appStore}>
            <UserContext.Provider value={{user:name, setName}}>
                <div className="app">
                    <Header />
                    <Outlet />
                </div>
            </UserContext.Provider>
        </Provider>  
        
    
        
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
            {
                path:'/favorites',
                element : <Favorites/>
            },
        ],
        errorElement : <Error404/>

    }
    
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={router}/>)