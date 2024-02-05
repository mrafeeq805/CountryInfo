import Card from '../components/Card'
import data from '../utils/data'
import { useState,useEffect } from 'react'



const CardsContainer = () => {
    const [list,setData] = useState(data)
    const [filterList,setFilterList] = useState(data)
    const [searcText,setSearchText] = useState('')

    useEffect(()=>{
        fetchData()
    },([]))

    const fetchData = async () =>{
        // const datas = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
        // const jso = await datas.json()
        // console.log(jso);
        setData(data)
    }
    console.log(filterList);

    return (
        <div className='body'>
            <div>
                <input
                    type="text"
                    value={searcText}
                    onChange={(e)=>{
                        setSearchText(e.target.value)
                    }}
                />
                <button
                    onClick={()=>{
                        const searchdata = list.filter(item=>

                            item.name.toLowerCase().includes(searcText.toLowerCase())

                        )
                        console.log(searchdata);
                        setFilterList(searchdata)
                    }}
                >
                    search
                </button>
            </div>
            <div>
                <button className='filter-btn' onClick={()=>{
                    const filtered = list.filter(item=>item.avgRating > 4)
                    setFilterList(filtered)
                    }
                    
                }
                >Top rated cards</button>
            </div>
            <div className='container'>
                {
                    filterList.map(item=> <Card key={item.id} data={item} />)
                }
            </div>

        </div>
        
    )
}
export default CardsContainer