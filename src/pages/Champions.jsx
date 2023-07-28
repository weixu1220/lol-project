import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Champions() {
    const [champs,setChamps] = useState({})
    async function getChamps() {
        let api = `https://ddragon.leagueoflegends.com/cdn/13.14.1/data/en_US/champion.json`
        try{
            const response = await fetch(api)
        const result = await response.json()
        const data = await result.data
        setChamps(data)
        }catch(error){
            console.error(error)
        }
        
    }

    useEffect(() => {
        getChamps()
    }, [])
    function loaded (){
        const names = Object.keys(champs)
        const displayItems = []
        let placeholderUrl = "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/champion/Aatrox.png"
        const onImageError = (e) => {
            e.target.src = placeholderUrl
          }
        for (let item of names){
            console.log("name",champs[item]['name'])
            let champName = champs[item]['name']
            console.log("image",champs[item]['image']['full'])
                let imgUrl = `https://ddragon.leagueoflegends.com/cdn/13.14.1/img/champion/${champs[item]['image']['full']}`
            console.log(imgUrl)

            
            displayItems.push(
            <Link className='champions' key={champName} to={`./champion/${champName}`}>
                <img src={imgUrl? imgUrl : placeholderUrl} alt={champName} onError={onImageError}/>
                <p>{champName}</p>
            </Link>
            )
        }
        return(
            <div className="champions-box">
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
        champs===[] ? loading() : loaded()
    );
}

export default Champions;
