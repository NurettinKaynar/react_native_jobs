import { useState,useEffect } from "react";
import axios from "axios";

const rapidApiKey=process.env.EXPO_PUBLIC_API_URL
const useFetch=(endpoint,query)=>{
    const [data, setData] = useState([])
    const [isloading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': rapidApiKey,
    'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
  },
  url: `https://jsearch.p.rapidapi.com/${endpoint}`,
  params: {
    ...query
  },
};

const fetchData=async()=>{
    setIsLoading(true)
    try {
        const response=await axios.request(options);
        setData(response.data.data)
        setIsLoading(false)
    } catch (error) {
        console.log("hata var",error);
        alert("Hata Oluştu")
        setIsLoading(false)
        
    }
}
useEffect(() => {
  fetchData()
}, [])

const refetch=()=>{
    setIsLoading(true)
    fetchData()
}

return {data,isloading,error,refetch}
}

export default useFetch