import { useEffect, useState } from "react";
import summonersRiftMap from "../images/summoners-rift-map.jpg"
function Home() {
    const [username, setUserName]=useState("")
    useEffect(()=>{
        const savedUserName = localStorage.getItem('username');
        if (savedUserName) {
            setUserName(savedUserName)
        }
    },[])
    function handleChange(e){
        setUserName(e.target.value)
    }
    function saveUsernameToLocal (){
        localStorage.setItem('username',username)
        setUserName("")
    }
    return (
        <div className="flex-col w-full">
        <div className="flex flex-wrap justify-center">
            {localStorage.getItem('username') && <h2 className="text-3xl font-bold text-amber-400 text-center">Welcome to Rift Archive, {localStorage.getItem('username')}!</h2>}
            {!localStorage.getItem('username') && <input className="border-2 rounded-md text-3xl p-1 m-1 text-center" type="text" value={username} onChange={handleChange} placeholder="username"/>}
            {!localStorage.getItem('username') && <button className="border-2 rounded-md text-amber-400 text-xl text-center p-3 m-1 bg-blue-950" onClick={saveUsernameToLocal}>Save Username</button>}
        </div>
            <img className="mx-auto my-5 map"src={summonersRiftMap} alt="Summoner's Rift Map" />
        </div>
    );
}

export default Home;