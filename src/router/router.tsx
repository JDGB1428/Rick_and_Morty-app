import { createBrowserRouter, Navigate } from "react-router-dom"
import Layouts from "../layouts/Layouts"
import CharacterPage from "../pages/CharacterPage"

const router = createBrowserRouter([
    {
        path:'/',
        element: <Layouts/>,
        children:[{
            path: '/',
            element: <CharacterPage/>
        },{
            path: '/location',
        },{
            path: '/character',
        }]
    },
    {
        path: '/',
        element: <Navigate to= ''/>
    },
])

export default router