import SearchBox from './component/SearchBox'
import InfoBox from './Infobox/infoBox'
import { useState } from 'react'
import './infoBox.css'
export default function WhetherApp(){
    let [newInfo , setInfo]= useState({
         city:"mumbai",
         temp: 44,
         tempmin:35,
         tempmax:44,
         feelLike:40,
         mausam:"haze"
    })
    let updateInfo = (result)=>{
        setInfo(result);
    }

    return(
        
        <div>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={newInfo}></InfoBox>
        </div>
    )
}