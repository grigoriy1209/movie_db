import {FC, PropsWithChildren, useEffect, useState} from "react";

import {IGenre, IMovie} from "../../interfaces";
import {genresService} from "../../services";
import {Genre} from "./Genre";
import css from "./Genres.module.css";

interface IProps extends PropsWithChildren{
    // genre:IGenre
}
const Genres:FC<IProps> = () => {
    const [genres, setGenres] = useState<IGenre[]>([])
    // const [movies, setMovies] = useState<IMovie[]>([])
    // const [selected, setSelected] = useState<number | null>(null)



    useEffect(() => {
        genresService.getAll().then(({data})=>setGenres(data.genres))
    }, []);

    // useEffect(() => {
    //     const filterMovie =movies.filter(movie =>movie.genre_id)
    //     setMovies(filterMovie)
    // }, [movies]);
    return (
        <div className={css.Genre_Box}>
            {
                genres.map(genre =>< Genre key={genre.id}  genre={genre} />)
            }
            {/* {*/}
            {/*    movies.map(movie =>(*/}
            {/*        <div key={movie.id}>{movie.title}</div>*/}
            {/*    ))*/}
            {/*}*/}
        </div>
    );
};

export {Genres};