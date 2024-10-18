import ListCharacter from '../components/ListCharacter';
import Pagination from '../components/Pagination';
import { useFetch } from '../hooks/useFetch'

const CharacterPage = () => {
    const{data, page, setPage} = useFetch();
    return (
        <>
            <Pagination page={page} setPage={setPage}/>
            <ListCharacter data={data}></ListCharacter>
            <Pagination page={page} setPage={setPage}/>
        </>
    )
}

export default CharacterPage
