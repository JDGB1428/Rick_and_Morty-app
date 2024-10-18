import ReactPaginate from "react-paginate"
import { Info } from "../interfaces/Rick_and_Morty"
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

interface PaginateProps {
    page: Info['pages']
    setPage: React.Dispatch<React.SetStateAction<number>>
}
const Pagination = ({ page, setPage }: PaginateProps) => {
    return (
        <ReactPaginate pageCount={page}
            breakLabel={<span className="mr-4">...</span>}
            pageRangeDisplayed={5}
            nextLabel={
                <button onClick={()=> setPage(page + 1)}>
                    <span className="flex items-center justify-center w-10 h-10 rounded-md bg-slate-400">
                        <ChevronRightIcon className="w-5 h-5" />
                    </span>
                </button>

            }
            containerClassName="flex items-center justify-center mt-8 mb-4"
            pageClassName=" mr-4 block w-10 h-10 border-solid items-center hover:bg-stone-400 bg-stone-200 justify-center flex rounded-md border"
            previousLabel={
                <button onClick={()=>setPage(page - 1)}>
                    <span className="flex items-center justify-center w-10 h-10 mr-4 rounded-md bg-slate-400">
                        <ChevronLeftIcon className="w-5 h-5" />
                    </span>
                </button>
            }
            activeClassName="bg-purple-800 text-white"
        />


    )
}

export default Pagination
