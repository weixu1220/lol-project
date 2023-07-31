import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function MyChamps() {
    const myChamps = useSelector(state => state.champs.myChamps)
    console.log(myChamps)
    const navigate = useNavigate()
    const displayItems = []
    let placeholderUrl = "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/champion/Aatrox.png"
    const onImageError = (e) => {
        e.target.src = placeholderUrl
        }
    for (let item of myChamps){
        let champName = item["champName"]
        let imgUrl = item["imgUrl"]
        
        displayItems.push(
            <div className="champ-box" key={champName}>
                <div  onClick={()=>navigate(`/champions/${champName}`)}className='champions'>
                    <img src={imgUrl? imgUrl : placeholderUrl} alt={champName} onError={onImageError}/>
                    <p>{champName}</p>
                </div>
            </div>
        )
    }
    return(
        <div className="champions-box">
            {displayItems}
        </div>
    )
    return (
        <div className="mychamps">
            mychamps
        </div>
    );
}

export default MyChamps;