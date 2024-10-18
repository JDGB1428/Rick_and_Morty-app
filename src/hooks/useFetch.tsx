import { useEffect,useState } from "react"
import { Info, RickAndMorty } from "../interfaces/Rick_and_Morty";

type useFetchState =  {
    ApiState: RickAndMorty['results'],
    ApiStatePage: Info['pages']
}

export function useFetch() {

    const [data, setData] = useState<useFetchState['ApiState']>([]);
    const [page, setPage] = useState<useFetchState['ApiStatePage']>(1);

    useEffect(() => {
        async function GetData(){
            try {
                const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
                const data = await response.json();
                setData(data.results);
            } catch (error) {
                console.log(error)
            }
        }
        GetData();
    }, [page])

    return {
        data,
        page,
        setPage
    }
}