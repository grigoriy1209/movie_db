import {useEffect, useState} from "react";
import { useParams} from "react-router-dom";
import {movieService} from "../services/movieService";
import {MovieInfo} from "../components";
import {IMovie} from "../interfaces/movieInterface";


const MovieDetailsPage = () => {
    const {movieId} = useParams();
    console.log(movieId)
    const [movieDetails, setMovieDetails] = useState<IMovie| null >(null)


    useEffect(() => {
        movieService.getById(Number(movieId)).then(({data})=>console.log(data))
    }, [movieId]);

    return (
        <div>

        </div>
    );
};

export {MovieDetailsPage};