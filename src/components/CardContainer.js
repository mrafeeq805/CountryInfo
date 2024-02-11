import Card from '../components/Card'

import { useState,useEffect,useContext } from 'react'
import Shimmer from './Shimmer'
import useGetOnlineStatus from '../utils/useGetOnlineStatus'
import { UnMemberCard } from '../components/Card'
import UserContext from '../utils/UserContext'


const UNMemberCard = UnMemberCard(Card)

const CardsContainer = () => {

    const [list,setData] = useState([])
    const [filterList,setFilterList] = useState([])
    const [searcText,setSearchText] = useState('')
    const [link,setLink] = useState('https://restcountries.com/v3.1/all')
    const regionslist = ["Europe","Asia","Africa","Antarctic","Americas","Oceania"]

    useEffect(()=>{
        fetchData()
    },([]))

    const fetchData = async () =>{
        
        const url = link;
        const options = {
            method: 'GET',
        };
        
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            setData(result)
            setFilterList(result)
            
        } catch (error) {
            
        }
    }

    const status = useGetOnlineStatus()
    if(status === "Offline"){
        return <h1>Looks like you are not connected to internet</h1>
    }
    if(list.length === 0){
        return <Shimmer/>
    }

    return (
        <div className=''>
            
            <div className='w-full flex justify-between my-5 px-5'>
                {/* search */}
            <div className='flex gap-3 w-2/4'>
                <input placeholder='   search countries' className='border-2 rounded-md w-2/3' type="text" value={searcText} onChange={(e)=>{
                        setSearchText(e.target.value)
                    }}
                />
                <button className='material-symbols-outlined text-gray-500' onClick={()=>{
                        const searchdata = list.filter(item=>

                            item.name.common.toLowerCase().includes(searcText.toLowerCase())

                        )
                        setFilterList(searchdata)
                    }}
                >
                    search
                </button>
            </div>
            {/* filter */}
            <div className='flex gap-4'>
                <select onChange={(e)=>{
                    let filt = list.filter(item=>item.region === e.target.value)
                    if(filt.length === 0){
                        filt = list
                    }
                    setFilterList(filt)
                }} className='border-2 rounded-lg py-2 px-10'>
                    <option value={'All Regions'}>Select Region</option>
                    <option value={'Asia'}>Asia</option>
                    <option value={'Americas'}>Americas</option>
                    <option value={'Africa'}>Africa</option>
                    <option value={'Antarctic'}>Antarctic</option>
                    <option value={'Europe'}>Europe</option>
                    <option value={'Oceania'}>Oceania</option>
                </select>
                
            </div>
            </div>
            
            <div className='w-full grid grid-cols-7 gap-5 px-3'>
                {
                    filterList.map((item,index)=> 
                        !item.unMember ? <Card key={index} data={item}/>:<UNMemberCard key={index} data={item}/>
                    )
                }
            </div>

        </div>
        
    )
}
export default CardsContainer