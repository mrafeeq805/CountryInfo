import React from 'react'
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import CardsContainer from './components/CardContainer';


const AppLayout = () =>{
   return (
        <div className='main'>
            <Header/>
            <CardsContainer/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<AppLayout/>)