import { RickAndMorty } from "../interfaces/Rick_and_Morty"

interface ListCharacterProps {
    data: RickAndMorty['results']
}

const ListCharacter = ({ data }: ListCharacterProps) => {
    return (
        <div className="flex flex-wrap justify-center gap-5">
            {
                data.map(item => (
                    <div key={item.id} className="rounded-lg shadow-md">
                        <img src={item.image} alt="" />
                        <div className="p-5">
                            <p className={item.status === 'Dead' ? 'text-red-600' : 'text-green-600'}>
                                <span className="font-bold uppercase">{item.status}</span>
                            </p>
                            <p>{item.name}</p>
                            <p>{item.gender}</p>
                            <p>{item.species}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ListCharacter
