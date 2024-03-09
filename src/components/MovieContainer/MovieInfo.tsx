import {FC, PropsWithChildren} from "react";
import {IGenre, IMovie} from "../../interfaces";
import {FaStar} from "react-icons/fa";

interface IProps extends PropsWithChildren{
   movieInfo:IMovie
    genres:IGenre[]

}
const MovieInfo:FC<IProps> = ({movieInfo,genres}) => {
    const {id,title,poster_path,vote_average,overview,backdrop_path} = movieInfo;
    return (
        <div>

            <div>{title}</div>
            {poster_path && <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title}/>}
            <div>
                {
                    genres.map(genre => (<button key={genre.ids}>{genre.name}</button>))
                }
            </div>

            {Array.from({ length: Math.floor(vote_average / 2) }, (_, index) => (
                <FaStar key={index} />
            ))}
            <div>{overview}</div>


        </div>
    );
};

export {MovieInfo};