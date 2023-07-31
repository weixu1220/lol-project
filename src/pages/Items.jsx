import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useChampsContext } from "../ChampsContext";

function Items() { 
    const { items} = useChampsContext();
    function loaded (){
        const itemIDs = Object.keys(items)
        const displayItems = []
        let placeholderUrl = `https://ddragon.leagueoflegends.com/cdn/13.14.1/img/item/1001.png`
        const onImageError = (e) => {
            e.target.src = placeholderUrl
          }

        for (let itemID of itemIDs){
            let itemName = items[itemID]['name']
            let imgUrl = `https://ddragon.leagueoflegends.com/cdn/13.14.1/img/item/${items[itemID]['image']['full']}`
            displayItems.push(
            <div className="flex justify-center w-40 h-50 p-1 border-2 ">
             <Link className='flex-col m-1 p-1' key={itemID} to={`./${itemID}`}>
                <img className="w-22 h-22 p-1 m-1" src={imgUrl? imgUrl : placeholderUrl} alt={itemName} onError={onImageError}/>
                <p className=" w-20 text-center p-1">{itemName}</p>
            </Link>
            </div>
            )
         }
        return(
            <div className="w-11/12 flex flex-wrap justify-center mx-auto my-5 p-1 ">
                {displayItems}
            </div>
        )
    }

    function loading (){
        return (
            <p>Loading...</p>
        )
    }

    return (
        !items ? loading() : loaded()
    );
}


export default Items;