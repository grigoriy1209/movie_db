import {FC, PropsWithChildren, useEffect, useState} from "react";

import {movieService} from "../../services";
import {IMovie} from "../../interfaces";
import {MovieListCard} from "./MovieListCard";
import css from '../Style/List_Movie/List.module.css'

import {UsePageQuery} from "../../hooks/usePageQuery";
import {number} from "joi";
interface IProps extends PropsWithChildren{

}

const MovieList:FC<IProps> = () => {
    const [movies, setMovies] = useState<IMovie[]>
    ({prev:number, next: number, results: []})
    const {page,nextPage,prevPage} = UsePageQuery();

    useEffect(() => {
        movieService.getAll().then(({data})=>setMovies({
            prev:data.page,
            next:data.page,
           results: data.results
        }))
    }, ['page']);
    return (
        <div className={css.List}>
            {
                movies.map((movie) => <MovieListCard key={movie.id} movie={movie}/>)
            }
            <button disabled={!movies.prev} onClick={prevPage}>prev</button>
            <button disabled={!movies.next} onClick={nextPage}>next</button>
        </div>
    );
};

export {MovieList};