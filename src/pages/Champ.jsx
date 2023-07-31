import { useParams } from "react-router-dom";
import { useChampsContext } from "../ChampsContext";
import { useEffect, useState } from "react";


function Champ() {
    const champName = useParams().champName
    const {champs} = useChampsContext();
    const [currentChamp,setCurrentChamp] = useState({})
    useEffect(()=>{
        if(champs[champName]){
            setCurrentChamp(champs[champName])
        }
    },[])

        if (!currentChamp.info || ! currentChamp.stats){
            return (<></>)
        }
    return (
        <div className="w-8/12 mx-auto text-xl p-1 m-1">
            <h1 className="text-center text-3xl">{currentChamp.name}</h1>
            <h2 className="border-2 p-2">Title: {currentChamp.title}</h2>
            <p className="border-2 p-2">Version: {currentChamp.version}</p>
            <p className="border-2 p-2">Lore: {currentChamp.blurb}</p>
            <p className="border-2 p-2">Resource: {currentChamp.partype}</p>
            <div className="info">
                <p className="border-2 p-2">Attack: {currentChamp.info?.attack}</p>
                <p className="border-2 p-2">Defense: {currentChamp.info?.defense}</p>
                <p className="border-2 p-2">Magic: {currentChamp.info?.magic}</p>
                <p className="border-2 p-2">Difficulty: {currentChamp.info?.difficulty}</p>
            </div>
            <div className="stats">
                <p className="border-2 p-2">HP: {currentChamp.stats?.hp}</p>
                <p className="border-2 p-2">HP per level: {currentChamp.stats?.hpperlevel}</p>
                <p className="border-2 p-2">HP regen: {currentChamp.stats?.hpregen}</p>
                <p className="border-2 p-2">HP regen per level: {currentChamp.stats?.hpregenperlevel}</p>
                <p className="border-2 p-2">MP: {currentChamp.stats?.mp}</p>
                <p className="border-2 p-2">MP per level: {currentChamp.stats?.mpperlevel}</p>
                <p className="border-2 p-2">MP regen: {currentChamp.stats?.mpregen}</p>
                <p className="border-2 p-2">mP regen per level: {currentChamp.stats?.mpregenperlevel}</p>
                <p className="border-2 p-2">Armor: {currentChamp.stats?.armor}</p>
                <p className="border-2 p-2">Armor per level: {currentChamp.stats?.armorperlevel}</p>
                <p className="border-2 p-2">Attack range: {currentChamp.stats?.attackrange}</p>
                <p className="border-2 p-2">Attack speed: {currentChamp.stats?.attackspeed}</p>
                <p className="border-2 p-2">Attack speed per level: {currentChamp.stats?.attackspeedperlevel}</p>
                <p className="border-2 p-2">Crit: {currentChamp.stats?.crit}</p>
                <p className="border-2 p-2">Crit per level: {currentChamp.stats?.critperlevel}</p>
                <p className="border-2 p-2">Movement speed: {currentChamp.stats?.movespeed}</p>
                <p className="border-2 p-2">Magic resist: {currentChamp.stats?.spellblock}</p>
                <p className="border-2 p-2">Magic resist per level: {currentChamp.stats?.spellblockperlevel}</p>
            </div>
        </div>
    );
}

export default Champ;