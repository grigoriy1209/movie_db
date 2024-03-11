import {FC, PropsWithChildren, useEffect, useState} from "react";

import {MovieListCard} from "./MovieListCard";
import {UsePageQuery} from "../../hooks";
import {IMovie} from "../../interfaces";
import {movieService} from "../../services";
import css from './Movie.module.css'

interface IProps extends PropsWithChildren{}

const MovieList:FC<IProps> = () => {
    const [movies, setMovies] = useState< IMovie[]>([])
    const {page, prevPage,nextPage} = UsePageQuery();


    useEffect(() => {
            movieService.getAll(page || '1').then(({data}) => setMovies(data.results))
        },
        [page]);
    return (
        <div  className={css.Movie_Box}>
            {
                movies.map((movie, index) => <MovieListCard key={movie.id} movie={movie}
                      genres={Array.isArray(movie.genre_ids) ? movie.genre_ids.filter(id => typeof id === 'number') : []}
                />)
            }
            <button onClick={prevPage}>prev</button>
            <span>{page}</span>
            <button onClick={nextPage}>next</button>
        </div>
    );
};

export {MovieList};