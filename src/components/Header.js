import { LOGO } from "../utils/constants"
import { useState } from "react"
import { Link } from "react-router-dom"
import useGetOnlineStatus from "../utils/useGetOnlineStatus"

const Header = () =>{

    const [value,setValue] = useState('Login')
    const status = useGetOnlineStatus()
    return (
         <div className='w-full flex justify-between px-5 items-center bg-slate-100'>
              <div className='h-16'>
                 <img className="h-full" src={LOGO} alt='logo'/>
              </div>
              <div className='w-full'>
                 <ul className="flex w-full gap-12 justify-end items-center">
                    <li className={status === 'Online'?'text-green-500':'text-red-500'}>
                        {status === 'Online'? "Online" : "Offline"}
                    </li>
                     <li>
                        <Link to='/'>Home</Link>
                    </li>

                    <li>
                        <Link to='/aboutus'>About us</Link>
                    </li>
                    <li>
                        <Link to='/contactus'>Contact us</Link>
                    </li>
                     <button onClick={()=>{
                       value === 'Login' ? setValue("Logout") : setValue("Login")
                     }}>{value}</button>
                 </ul>
              </div>
              
         </div>
     )
 }

 export default Header