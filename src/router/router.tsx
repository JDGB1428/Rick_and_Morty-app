import { createBrowserRouter, Navigate } from "react-router-dom"
import Layouts from "../layouts/Layouts"
import Character from "../pages/CharacterPage"

const router = createBrowserRouter([
    {
        path:'/',
        element: <Layouts/>,
        children:[{
            path: '/',
            element: <Character/>
        },{
            path: '/planets',
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