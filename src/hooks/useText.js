import { useEffect, useState } from "react";
import { URI_API } from "../const/const";

function useText(holiday){
    const [text, setText] = useState('Выберите повод для поздравления');
    useEffect(()=>{
        if(holiday){
            fetch(`${URI_API}text/${holiday}`).then(data=> {
                if(data.status!==200){
                    throw new Error(data.status)
                }
                return data.json()
              }).then((data)=>{
                    setText(data.text)   
              }).catch(err=>console.error(err)) 
        }
    },[holiday])
    return [text]
}
export {useText}