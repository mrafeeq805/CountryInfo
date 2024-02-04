import React from 'react'
import ReactDOM from 'react-dom/client';

const Header = () =>{
   return (
        <div className='header'>
             <div className='logo'>
                <img src="https://static.vecteezy.com/system/resources/thumbnails/011/468/885/small/food-logo-spoon-fork-icon-illustration-symbol-for-fast-delivery-app-restaurant-template-free-vector.jpg" alt='logo'/>
             </div>
             <div className='navigation'>
                <ul >
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <li>Profile</li>
                </ul>
             </div>
             
        </div>
    )
}

const Card = (props) => {
    console.log(props);
    const {name,rating,delivery_time,place,cousine} = props.data
    return (
        <div className='card'>
            <div className='thumb'>
                <img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/86f52324ecee5fc94cbf63c4a568b672' alt='thumb' />
            </div>
            <span className='heading'>{name}</span>
            <div className='cont'>
                <span className='sub'>{rating}</span>
                <span className='sub'>{delivery_time}</span>
            </div>
            <span className='cuisenes'>{cousine}</span>
            <span className='cuisenes'>{place}</span>
        </div>
    )
}

const data = [
    {
        name : "kfc",
        rating : 5,
        delivery_time : '45 mins',
        place : 'Parambil Peedika',
        cousine : 'South indian'
    },
    {
        name : "aryans",
        rating : 4,
        delivery_time : '15 mins',
        place : 'Varappara',
        cousine : 'North indians'
    },
    {
        name : "Nahdi Kuzhimandi",
        rating : 5,
        delivery_time : '30 mins',
        place : 'Parambil Peedika',
        cousine : 'Arabian'
    },
    {
        name : "Pizza Hut",
        rating : 4.5,
        delivery_time : '25 mins',
        place : 'Malappuram',
        cousine : 'South indian'
    },

]

const CardsContainer = () => {
    return (
        <div className='container'>
            {
                data.map((item,index) => <Card key={index} data={item} />)
            }
        </div>
    )
}

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