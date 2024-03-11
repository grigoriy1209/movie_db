import {useAppLocation} from "../hooks";
import {IMovie} from "../interfaces";
import {useEffect, useState} from "react";
import {movieService} from "../services";
import {useParams} from "react-router-dom";

import {MovieInfo} from "../components";


const MovieDetailPage = () => {
    
    const {state} = useAppLocation<{movie:IMovie}>();

    const [movieInfo, setMovieInfo] = useState<IMovie | null> (null)
    // const [genres, setGenres] = useState<string[]>([])
    const {id} = useParams<{id:string}>();



    useEffect(() => {
        if(state?.movie){
            setMovieInfo(state.movie)
            // setGenres(state.movie.genres)
        }else {

            movieService.getById(Number(id)).then(({data}) => {
                setMovieInfo(data);
                // setGenres(data.genres);
            })
        }
    }, [id, state]);
    
    return (
        <div >
            {movieInfo && <MovieInfo movieInfo={movieInfo} />}
        </div>
    );
};

export {MovieDetailPage};