import { useEffect, useState } from "react";
import summonersRiftMap from "../images/summoners-rift-map.jpg"
function Home() {

    return (
        <div className="flex-col w-full">
            <img className="mx-auto my-5 map" src={summonersRiftMap} alt="Summoner's Rift Map" />
        </div>
    );
}

export default Home;