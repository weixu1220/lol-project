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
        <div className="w-8/12 mx-auto text-xl p-1 m-1">
            <h1 className="text-center text-3xl">{currentItem.name}</h1>
            <p className="border-2 p-2">Cost: {currentItem.gold?.base}</p>
            <p className="border-2 p-2">Resell: {currentItem.gold?.sell}</p>
            <p className="border-2 p-2">Description: {currentItem.plaintext}</p>
        </div>
    );
}

export default Item;