import { Link } from "react-router-dom";
import { useChampsContext } from '../ChampsContext';
import { useDispatch } from 'react-redux'
import { AddChamp } from '../ChampsSlice'
function Champions() {
    const { champs } = useChampsContext();
    const dispatch = useDispatch()
    function loaded() {
        const names = Object.keys(champs)
        const displayItems = []
        let placeholderUrl = "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/champion/Aatrox.png"
        const onImageError = (e) => {
            e.target.src = placeholderUrl
        }
        for (let item of names) {
            let champName = champs[item]['name']
            let imgUrl = `https://ddragon.leagueoflegends.com/cdn/13.14.1/img/champion/${champs[item]['image']['full']}`
            displayItems.push(
                <div className="flex-col w-48 h-64 justify-center border-2 p-5" key={champName}>
                    <Link className='flex-col justify-center' to={`./${champName}`}>
                        <img className="w-32 h-32 p-1" src={imgUrl ? imgUrl : placeholderUrl} alt={champName} onError={onImageError} />
                        <p className="text-2xl text-center">{champName}</p>
                    </Link>
                    <button className="border-2 rounded-md m-2 p-2 hover:shadow-lg" onClick={() => dispatch(AddChamp({ champName, imgUrl }))}>Add Champion</button>
                </div>
            )
        }
        return (
            <div className=" w-11/12 flex flex-wrap justify-center my-5 mx-auto p-1 ">
                {displayItems}
            </div>
        )
    }

    function loading() {
        return (
            <p>Loading...</p>
        )
    }

    return (
        !champs ? loading() : loaded()
    );
}

export default Champions;
