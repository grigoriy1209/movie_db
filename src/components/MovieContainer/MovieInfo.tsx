import {FC, PropsWithChildren} from "react";
import {IGenre, IMovie} from "../../interfaces";
import {FaStar} from "react-icons/fa";
import {useLocation, useNavigate} from "react-router-dom";


interface IProps extends PropsWithChildren{
   movieInfo:IMovie
}


const MovieInfo:FC<IProps> = ({movieInfo}) => {
  const navigate = useNavigate();
  const location = useLocation();
    const {id,title,poster_path,vote_average,overview,backdrop_path} = movieInfo;

const back =()=>{
    navigate(location.state? location.state.from:'/movies?page=')
}
    return (
        <div>

            <div>{title}</div>
            {poster_path && <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title}/>}
            <div>

            </div>

            {Array.from({length: Math.floor(vote_average / 2)}, (_, index) => (
                <FaStar key={index} />
            ))}
            <div>{overview}</div>
            <button onClick={back}>back</button>


        </div>
    );
};

export {MovieInfo};