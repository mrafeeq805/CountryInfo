import { LOGO } from "../utils/constants"
import { useState } from "react"

const Header = () =>{
    const [value,setValue] = useState('Login')
    return (
         <div className='header'>
              <div className='logo'>
                 <img src={LOGO} alt='logo'/>
              </div>
              <div className='navigation'>
                 <ul >
                     <li>Home</li>
                     <li>About Us</li>
                     <li>Contact Us</li>
                     <li>Cart</li>
                     <li>Profile</li>
                     <button onClick={()=>{
                       value === 'Login' ? setValue("Logout") : setValue("Login")
                     }}>{value}</button>
                 </ul>
              </div>
              
         </div>
     )
 }

 export default Header