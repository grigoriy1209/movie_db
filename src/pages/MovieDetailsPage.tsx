import {useEffect, useState} from "react";
import {Outlet, useParams} from "react-router-dom";
import {movieService} from "../services/movieService";
import {MovieInfo} from "../components";



interface IMovie{}

const MovieDetailsPage = () => {
    const {id} = useParams();
    console.log(id)
    const [movieDetails, setMovieDetails] = useState<IMovie| null >(null)


    useEffect(() => {
        movieService.getById(Number(id)).then(({data})=>setMovieDetails(data))
    }, [id]);
    return (
        <div>
            {/*{*/}
            {/*    movieDetails && <MovieInfo movieDetails={movieDetails}/>*/}
            {/*}*/}
            <Outlet/>
        </div>
    );
};

export {MovieDetailsPage};