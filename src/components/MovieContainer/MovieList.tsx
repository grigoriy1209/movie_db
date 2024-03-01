import {FC, PropsWithChildren, useEffect, useState} from "react";
import { IMovie} from "../../interfaces/movieInterface";
import {movieService} from "../../services/movieService";
import {MovieListCard} from "./MovieListCard";
import {UsePageQuery} from "../../hooks";

interface IProps extends PropsWithChildren{}

const MovieList:FC<IProps> = () => {
    const [movies, setMovies] = useState< IMovie[]>([])
    const {page, prevPage,nextPage} = UsePageQuery();


    useEffect(() => {

            movieService.getAll(page || '1').then(({data}) => setMovies(data.results))
        },
        [page]);
    return (
        <div>
            {
                movies.map(movie =><MovieListCard key={movie.id} movie={movie}/>)
            }
            <button onClick={prevPage}>prev</button>
            <span>{page}</span>
            <button onClick={nextPage}>next</button>
        </div>
    );
};

export {MovieList};