import {createBrowserRouter, Navigate} from "react-router-dom";
import React from "react";

import {MainLayout} from "./layouts";
import {GenresPage, MoviesPage} from "./pages";

import {MovieDetailsPage} from "./pages/MovieDetailsPage";
import {MovieInfo} from "./components";


const router = createBrowserRouter([
    {
        path:'',element:<MainLayout/>, children:[
            {
                index:true, element:<Navigate to={'movies'}/>
            },
            {
                path:'movies', element:<MoviesPage/>,children:[
                    {
                        path:'movie/:id',element:<MovieDetailsPage/>
                    }
                ]
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