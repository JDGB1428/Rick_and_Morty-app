import { useEffect, useState } from "react"
import { Result } from "../interfaces/Rick_and_Morty";
import { getData } from "../services/getData";

interface useFetchState {
    character: Result[],
}

export function useFetch() {

    const [character, setCharacter] = useState<useFetchState['character']>([]);
    useEffect(()=>{
        GetAllData();
    },[])

    const GetAllData = async () =>{
        const data = await getData();
        setCharacter(data.results);
    }

    return {
        character,
    }
}