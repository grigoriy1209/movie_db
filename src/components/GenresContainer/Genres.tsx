import {FC, PropsWithChildren, useEffect, useState} from "react";

import {IGenre, IMovie} from "../../interfaces";
import {genresService} from "../../services";
import {Genre} from "./Genre";
import css from "./Genres.module.css";

interface IProps extends PropsWithChildren{}
const Genres:FC<IProps> = () => {
    const [genres, setGenres] = useState<IGenre[]>([])
    const [moviesGenres, setMoviesGenres] = useState<IMovie[]>([])

   const filterMovie = movies.filter(movie =>movie.genre_id === genre.id)
    setMoviesGenres(filterMovie)

    useEffect(() => {
        genresService.getAll().then(({data})=>setGenres(data.genres))
    }, []);
    return (
        <div className={css.Genre_Box}>
            {
                genres.map(genre =>< Genre key={genre.id} genre={genre}/>)
            }
        </div>
    );
};

export {Genres};