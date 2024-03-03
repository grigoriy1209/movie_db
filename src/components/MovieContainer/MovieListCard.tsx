import {FC, PropsWithChildren} from "react";
import {IMovie} from "../../interfaces";
import {useNavigate} from "react-router-dom";

interface IProps extends PropsWithChildren{
    movie:IMovie
}
const MovieListCard:FC<IProps> = ({movie}) => {

    const {id,title, poster_path , vote_average} = movie;

    const navigate = useNavigate();
    const save = ()=>{
        navigate(`/movies/${movie.id}`,{state:{movie}})
    }
    return (
        <div>
            <div>{movie.title}</div>
            <p>{vote_average}</p>
            <button onClick={save}>
            {movie.poster_path && <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={movie.title} />}
            </button>
        </div>
    );
}

export {MovieListCard};