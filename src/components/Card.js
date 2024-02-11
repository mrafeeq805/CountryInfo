import { THUMB_URL } from "../utils/constants"
import { Link } from "react-router-dom"
import { removeFavorite } from "../utils/favoriteSlice"
import { useDispatch } from "react-redux"

const Card = (props) => {
    const {name,flags,capital,population} = props.data

    return (

        <div className=' rounded-lg shadow-lg bg-slate-100'>
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

export const UnMemberCard = (Card) =>{
    return(props)=>{
        return (
            <div>
                <label className="bg-black text-white absolute text-sm w-max p-1">UN Member</label>
                <Card {...props}/>
            </div>
        )
    }
}
export const FavCard = (Card) =>{
    const dispatch = useDispatch()
    const removeHandler = (item) =>{
        dispatch(removeFavorite(item))
    }
    return(props)=>{
        return (
            <div>
                <button onClick={()=>{removeHandler(props.data.name.common)}} className="bg-red-500 text-white absolute text-sm w-max p-1">Delete</button>
                <Card {...props}/>
            </div>
        )
    }
}
export default Card