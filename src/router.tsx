import {createBrowserRouter, Navigate} from "react-router-dom";
import React from "react";

import {MainLayout} from "./layouts";
import {GenresPage, MovieDetailPage, MoviesPage} from "./pages";


const router = createBrowserRouter([
    {
        path:'',element:<MainLayout/>, children:[
            {
                index:true, element:<Navigate to={'movies'}/>
            },
            {
                path:'movies', element:<MoviesPage/>

            },
            {
                path:'/movies/:id',element:<MovieDetailPage />
            },
            {
                path:'genres', element:<GenresPage/>
            }
        ]
    }
])

export {
    router
}