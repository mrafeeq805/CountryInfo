import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Shimmer from "./Shimmer"
const CountryDetails = () => {
    const [details,setDetails] = useState({})
    const {name} = useParams()
    useEffect(()=>{
        fetchData()
    },([]))

    const fetchData = async () =>{

        const response =  await fetch('https://restcountries.com/v3.1/name/'+name+'?fullText=true');
        const datas =  await response.json()

        setDetails(datas[0])
        
    }
    if(Object.keys(details).length === 0){
        return(
            <Shimmer/>
        )
    }
    console.log(details);
    return (
        <div className="h-full flex flex-col items-center px-32 justify-center mt-5">

            <div className='h-32 mb-2'>
                <img className="h-full object-cover" src={details.flags.png} alt='thumb' />
            </div>
            
            <span className="text-2xl ">{details.name.common}</span>
            <div className="h-[1px] bg-gray-200 w-full mt-2"></div>
            <div className="grid grid-cols-4 w-full  gap-5 mt-5">
                <div className="flex flex-col">
                    <span className="text-gray-500 ">Area</span>
                    <span>{details.area}</span>
                </div>
                <div className="flex flex-col ">
                    <span className="text-gray-500">Borders</span>
                    <span>{details.borders}</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-gray-500">Capital</span>
                    <span>{details.capital}</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-gray-500">Timezone</span>
                    <span>{details.timezones}</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-gray-500 ">Region</span>
                    <span>{details.region}</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-gray-500">Population</span>
                    <span>{details.population}</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-gray-500">Sub Region</span>
                    <span>{details.subregion}</span>
                </div>
            </div>

        </div>
        
    )
}

export default CountryDetails
