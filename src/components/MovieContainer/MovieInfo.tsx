
import {FC} from "react";
import {IMovie} from "../../interfaces/movieInterface";


const MovieInfo:FC<{ movieInfo: IMovie }> = ({movieInfo}) => {
    const {id, title, vote_average, poster_path} = movieInfo


     return (
        <div>
            <h2>{title}</h2>
        </div>
    );
};

export {MovieInfo};