import {FC, PropsWithChildren} from "react";
import {IMovie} from "../../interfaces";

interface IProps extends PropsWithChildren{
   movieInfo:IMovie
    genres:string[]

}
const MovieInfo:FC<IProps> = ({movieInfo, genres}) => {
    const {id,title,poster_path,vote_average,overview} = movieInfo;
    return (
        <div>
            <div>{title}</div>
            <div>{overview}</div>
            <p>g{genres&& genres.join(',')}</p>
            <p>{vote_average}</p>
            {poster_path && <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} />}
        </div>
    );
};

export {MovieInfo};