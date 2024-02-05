import { LOGO } from "../utils/constants"

const Header = () =>{
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
                 </ul>
              </div>
              
         </div>
     )
 }

 export default Header