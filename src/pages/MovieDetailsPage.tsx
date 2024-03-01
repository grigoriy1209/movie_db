import {useEffect, useState} from "react";
import { useParams} from "react-router-dom";
import {movieService} from "../services/movieService";
import {MovieInfo} from "../components";
import {IMovie} from "../interfaces/movieInterface";


const MovieDetailsPage = () => {
    const {id} = useParams();
    console.log(id)
    const [movieDetails, setMovieDetails] = useState<IMovie| null >(null)


    useEffect(() => {
        movieService.getById(Number(id)).then(({data})=>setMovieDetails(data))
    }, [id]);

    return (
        <div>
            {
                movieDetails && <MovieInfo movieInfo={movieDetails}/>
            }

        </div>
    );
};

export {MovieDetailsPage};