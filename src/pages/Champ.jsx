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
        <div className="champ">
            <h1>{currentChamp.name}</h1>
            <h2>Title: {currentChamp.title}</h2>
            <p>Version: {currentChamp.version}</p>
            <p>Lore: {currentChamp.blurb}</p>
            <p>Resource: {currentChamp.partype}</p>
            <div className="info">
                <p>Attack: {currentChamp.info?.attack}</p>
                <p>Defense: {currentChamp.info?.defense}</p>
                <p>Magic: {currentChamp.info?.magic}</p>
                <p>Difficulty: {currentChamp.info?.difficulty}</p>
            </div>
            <div className="stats">
                <p>HP: {currentChamp.stats?.hp}</p>
                <p>HP per level: {currentChamp.stats?.hpperlevel}</p>
                <p>HP regen: {currentChamp.stats?.hpregen}</p>
                <p>HP regen per level: {currentChamp.stats?.hpregenperlevel}</p>
                <p>MP: {currentChamp.stats?.mp}</p>
                <p>MP per level: {currentChamp.stats?.mpperlevel}</p>
                <p>MP regen: {currentChamp.stats?.mpregen}</p>
                <p>mP regen per level: {currentChamp.stats?.mpregenperlevel}</p>
                <p>Armor: {currentChamp.stats?.armor}</p>
                <p>Armor per level: {currentChamp.stats?.armorperlevel}</p>
                <p>Attack range: {currentChamp.stats?.attackrange}</p>
                <p>Attack speed: {currentChamp.stats?.attackspeed}</p>
                <p>Attack speed per level: {currentChamp.stats?.attackspeedperlevel}</p>
                <p>Crit: {currentChamp.stats?.crit}</p>
                <p>Crit per level: {currentChamp.stats?.critperlevel}</p>
                <p>Movement speed: {currentChamp.stats?.movespeed}</p>
                <p>Magic resist: {currentChamp.stats?.spellblock}</p>
                <p>Magic resist per level: {currentChamp.stats?.spellblockperlevel}</p>
            </div>
        </div>
    );
}

export default Champ;