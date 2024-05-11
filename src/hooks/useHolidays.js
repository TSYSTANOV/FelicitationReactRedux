import { useState, useEffect} from "react";
import { URI_API } from "../const/const";

function useHolidays (){
    const [holidays, setHolidays] = useState({})
    useEffect(()=>{
        fetch(URI_API).then(response=>{
          if(response.status !== 200){
            throw new Error(response.status)
          }
          return response.json()
        }).then(data=> {
          setHolidays(data)
        }).catch(err=>console.error(err)) 
      },[])
      return [holidays]
}
export {useHolidays}