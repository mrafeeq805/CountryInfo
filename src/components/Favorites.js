import Card,{FavCard} from "./Card"
import { useSelector,useDispatch } from "react-redux"
import { clearFavorite } from "../utils/favoriteSlice"
const Favorites = () => {
    const data = useSelector((store) => store.fav.items)
    const dispatch = useDispatch()
    const clearHandler = () =>{
        dispatch(clearFavorite())
    }
    const FavCards = FavCard(Card)
    return (
        
        <div className="h-full flex flex-col items-center px-56 justify-center mt-5">
            
            <span className="text-2xl font-bold">Favorites ({data.length})</span>
            <button className="bg-slate-400 p-2 rounded-lg text-white"
             onClick={clearHandler}>
                Clear Favorites
            </button>
            <div className='w-full grid grid-cols-5 gap-5 px-3'>
                {
                    data.map((item,index)=> 
                        <FavCards key={index} data={item}/>
                    )
                }
            </div>
            
        </div>
        
    )
}

export default Favorites
