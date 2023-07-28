import { useParams } from "react-router-dom";
import { useChampsContext } from "../ChampsContext";
import { useEffect, useState } from "react";
import { current } from "@reduxjs/toolkit";

function Item() {
    const itemID = useParams().itemID
    const { items} = useChampsContext();
    const [currentItem,setCurrentItem] = useState({})
    useEffect(()=>{
        if(items[itemID]){
            setCurrentItem(items[itemID])
        }
    },[])

        if (!currentItem.gold){
            return (<></>)
        }
    return (
        <div className="item">
            <h1>{currentItem.name}</h1>
            <p>Cost: {currentItem.gold?.base}</p>
            <p>Resell: {currentItem.gold?.sell}</p>
            <p>Description: {currentItem.plaintext}</p>
        </div>
    );
}

export default Item;