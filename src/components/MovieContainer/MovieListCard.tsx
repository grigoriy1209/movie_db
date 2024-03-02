import {FC} from "react";
import {NavLink} from "react-router-dom";

import {IMovie} from "../../interfaces/movieInterface";

interface IData {
    movie:IMovie
}
const MovieListCard:FC<IData> = ({movie}) => {

    const {id,title,poster_path,vote_average}= movie
    console.log(movie.id)

    return (
        <div>
             <NavLink to= {`movies/${movie.id}`} >
            {movie.poster_path && <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={movie.title}/>}
             </NavLink>
           <h2>{movie.title}</h2>
            <p>{vote_average}</p>
        </div>
    );
};

export {MovieListCard};