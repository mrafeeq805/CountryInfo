import Card from '../components/Card'
import data from '../utils/data'
import { useState } from 'react'



const CardsContainer = () => {
    const [list,setData] = useState(data)

    return (
        <div className='body'>
            <div>
                <button className='filter-btn' onClick={()=>{
                    const filtered = list.filter(item=>item.avgRating > 4)
                    setData(filtered)
                    }
                    
                }
                >Top rated cards</button>
            </div>
            <div className='container'>
                {
                    list.map(item=> <Card key={item.id} data={item} />)
                }
            </div>

        </div>
        
    )
}
export default CardsContainer