import { useEffect, useState } from "react";

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
        <div className="home">
            {localStorage.getItem('username') && <h2>Welcome to Rift Archive, {localStorage.getItem('username')}!</h2>}
            {!localStorage.getItem('username') && <input type="text" value={username} onChange={handleChange} placeholder="username"/>}
            {!localStorage.getItem('username') && <button onClick={saveUsernameToLocal}>Save Username</button>}
        </div>
    );
}

export default Home;