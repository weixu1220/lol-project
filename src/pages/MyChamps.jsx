import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ResetChamps } from '../ChampsSlice'

function MyChamps() {
    const myChamps = useSelector(state => state.champs?.myChamps)
    const navigate = useNavigate()
    const displayItems = []
    let placeholderUrl = "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/champion/Aatrox.png"
    const dispatch = useDispatch();
    const handleResetChamps = () => {
    dispatch(ResetChamps());
    };
    const onImageError = (e) => {
        e.target.src = placeholderUrl
        }
    for (let item of myChamps){
        let champName = item["champName"]
        let imgUrl = item["imgUrl"]
        
        displayItems.push(
            <div className="flex-col w-48 h-64 justify-center border-2 p-5 m-5 rounded-xl hover:shadow-2xl" key={champName}>
                <div className="flex-col justify-center" onClick={()=>navigate(`/champions/${champName}`)}>
                    <img className="w-32 h-32 p-1" src={imgUrl? imgUrl : placeholderUrl} alt={champName} onError={onImageError}/>
                    <p className="text-2xl text-center">{champName}</p>
                </div>
            </div>
        )
    }
    return(
        <div className="flex flex-col">
            <button className="border-2 rounded-md text-amber-400 text-xl text-center p-3 mt-10 mx-auto bg-blue-950" onClick={handleResetChamps}>Reset My Champs</button>
            <div className="w-11/12 flex flex-wrap justify-center my-5 mx-auto p-1">
                {displayItems}
            </div>
        </div>
        
    )
}

export default MyChamps;