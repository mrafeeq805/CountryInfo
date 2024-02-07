import { useState,useEffect } from "react"

const useGetDetails = (name) =>{
    const [details,setDetails] = useState({})
    useEffect(()=>{
        fetchData()
    },([]))

    const fetchData = async () =>{

        const response =  await fetch('https://restcountries.com/v3.1/name/'+name+'?fullText=true');
        const datas =  await response.json()

        setDetails(datas[0])
        
    }
    return details
}
export default useGetDetails