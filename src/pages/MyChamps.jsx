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
            <div className="flex-col w-48 h-64 justify-center border-2 p-5" key={champName}>
                <div className="flex-col justify-center" onClick={()=>navigate(`/champions/${champName}`)}className='champions'>
                    <img className="w-32 h-32 p-1" src={imgUrl? imgUrl : placeholderUrl} alt={champName} onError={onImageError}/>
                    <p className="text-2xl text-center">{champName}</p>
                </div>
            </div>
        )
    }
    return(
        <div className="w-11/12 flex flex-wrap justify-center my-5 mx-auto p-1">
            {displayItems}
        </div>
    )
}

export default MyChamps;