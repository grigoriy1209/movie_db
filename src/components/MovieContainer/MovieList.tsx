import {FC, PropsWithChildren, useEffect, useState} from "react";

import {MovieListCard} from "./MovieListCard";
import {UsePageQuery} from "../../hooks";
import {IMovie} from "../../interfaces";
import {movieService} from "../../services";

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
            <button onClick={prevPage}>prev</button>
            <span>{page}</span>
            <button onClick={nextPage}>next</button>
            {
                movies.map((movie,index) => <MovieListCard key={movie.id} movie={movie}/>)
            }
        </div>
    );
};

export {MovieList};