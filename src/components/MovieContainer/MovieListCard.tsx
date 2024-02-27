import {FC, PropsWithChildren, useState} from "react";

import {IMovie} from "../../interfaces";

interface IProps extends  PropsWithChildren{
    movie:IMovie
}
const MovieListCard:FC<IProps> = ({movie}) => {
    const {id,title,poster_path}= movie;
    return (
        <div>
            {movie.poster_path && <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title}/>}
            <div>{movie.title}</div>

        </div>
    );
};

export {MovieListCard};