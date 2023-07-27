import { useEffect, useState } from "react"

function Items() {
    const [items,setItems] = useState({})
    async function getItems() {
        let api = `https://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/item.json`
        try{
            const response = await fetch(api)
        const result = await response.json()
        const data = await result.data
        console.log(data)
        setItems(data)
        }catch(error){
            console.error(error)
        }
        
    }

    useEffect(() => {
        getItems()
    }, [])
    console.log(items)
    function loaded (){
        const itemIDs = Object.keys(items)
        const displayItems = []
        let placeholderUrl = `https://ddragon.leagueoflegends.com/cdn/13.13.1/img/item/1001.png`
        const onImageError = (e) => {
            e.target.src = placeholderUrl
          }
        console.log(itemIDs)
        for (let itemID of itemIDs){
            console.log("name",items[itemID]['name'])
            let itemName = items[itemID]['name']
            console.log("image",items[itemID]['image']['full'])
                let imgUrl = `https://ddragon.leagueoflegends.com/cdn/13.13.1/img/item/${items[itemID]['image']['full']}`
                console.log(imgUrl)
            
            displayItems.push(
            <div className='items' key={itemID}>
                <img src={imgUrl? imgUrl : placeholderUrl} alt={itemName} onError={onImageError}/>
                <p>{itemName}</p>
            </div>
            )
         }
        return(
            <div className="champions">
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
        items===[] ? loading() : loaded()
    );
}


export default Items;