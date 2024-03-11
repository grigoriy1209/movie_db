import {FC, PropsWithChildren} from "react";
import {IMovie} from "../../interfaces";
import {useNavigate} from "react-router-dom";
import {FaStar} from "react-icons/fa";

import css from "./Movie.module.css";

interface IProps extends PropsWithChildren{
    movie:IMovie
    genres:string[]

}
const MovieListCard:FC<IProps> = ({movie,genres }) => {

    const {id,title, poster_path , vote_average} = movie;

    const navigate = useNavigate();
    const save = ()=>{
        navigate(`/movies/${movie.id}`,{state:{movie}})
    }
    return (
        <div  className={css.Movie_box}>
            <div>{movie.title}</div>
            {Array.from({ length: Math.floor(vote_average/2 ) }, (_, index) => (
                <FaStar key={index} />
            ))}
           <p>genres:{

                  genres.join(",")

           }</p>
            <button onClick={save}>
            {movie.poster_path && <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={movie.title} />}
            </button>
        </div>
    );
}

export {MovieListCard};