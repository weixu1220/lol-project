import { createContext, useContext, useState, useEffect } from "react";

const ChampsContext = createContext()

export function useChampsContext(){
    return useContext(ChampsContext)
}

export function ChampsProvider(props){
    const [champs,setChamps] = useState({})
    async function getChamps() {
        let api = `https://ddragon.leagueoflegends.com/cdn/13.14.1/data/en_US/champion.json`
        try{
            const response = await fetch(api)
        const result = await response.json()
        const data = await result.data
        setChamps(data)
        }catch(error){
            console.error(error)
        }
    }
    const [items,setItems] = useState({})
    async function getItems() {
        let api = `https://ddragon.leagueoflegends.com/cdn/13.14.1/data/en_US/item.json`
        try{
            const response = await fetch(api)
        const result = await response.json()
        const data = await result.data
        setItems(data)
        }catch(error){
            console.error(error)
        }
        
    }

    useEffect(() => {
        getChamps()
        getItems()
    }, [])

    const sharedValue = {
        champs,
        items
    }
    return(
        <ChampsContext.Provider value={sharedValue}>
            {props.children}
        </ChampsContext.Provider>
    )
}