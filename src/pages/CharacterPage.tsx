import ListCharacter from '../components/ListCharacter';
import { useFetch } from '../hooks/useFetch'

const CharacterPage = () => {
    const{character} = useFetch();
    return (
        <ListCharacter character={character}></ListCharacter>
    )
}

export default CharacterPage
