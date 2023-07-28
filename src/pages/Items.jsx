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
             <Link className='items' key={itemID} to={`./${itemID}`}>
                <img src={imgUrl? imgUrl : placeholderUrl} alt={itemName} onError={onImageError}/>
                <p>{itemName}</p>
            </Link>
            )
         }
        return(
            <div className="items-box">
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