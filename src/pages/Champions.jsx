import { Link } from "react-router-dom";
import { useChampsContext } from '../ChampsContext';

function Champions() {
    const { champs} = useChampsContext();
    function loaded (){
        const names = Object.keys(champs)
        const displayItems = []
        let placeholderUrl = "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/champion/Aatrox.png"
        const onImageError = (e) => {
            e.target.src = placeholderUrl
          }
        for (let item of names){
            let champName = champs[item]['name']
            let imgUrl = `https://ddragon.leagueoflegends.com/cdn/13.14.1/img/champion/${champs[item]['image']['full']}`
            displayItems.push(
            <Link className='champions' key={champName} to={`./${champName}`}>
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
        !champs ? loading() : loaded()
    );
}

export default Champions;
