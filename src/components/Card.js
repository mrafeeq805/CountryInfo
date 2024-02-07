import { THUMB_URL } from "../utils/constants"
import { Link } from "react-router-dom"

const Card = (props) => {
    const {name,flags,capital,population} = props.data
    return (

        <div className='border-2 shadow-lg'>
            <Link to={"/details/"+name.common}>
                <div className='h-32'>
                    <img className="h-full w-full object-cover" src={flags.png} alt='thumb' />
                </div>
                <div className="p-2">
                    <h1 className='font-medium'>{name.common}</h1>
                    <h1 className='text-sm text-gray-500'>Capital : {capital}</h1>
                    <h1 className='text-sm text-gray-500'>Population : {population}</h1>
                </div>
            </Link>
            
        </div>
    )
}
export default Card