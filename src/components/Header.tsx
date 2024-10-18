import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header className="py-5 bg-black shadow">
            <div className="container flex items-center justify-between mx-auto">

                <h1 className="text-3xl font-bold text-white">
                    Api Rick and Morty
                </h1>

                <nav className="flex items-center gap-5">
                    <Link to='/' className="text-sm font-bold text-white uppercase">Personajes</Link>
                    <Link to='/location' className="text-sm font-bold text-white uppercase">Lugares</Link>
                </nav>
            </div>
        </header>

    )
}

export default Header
