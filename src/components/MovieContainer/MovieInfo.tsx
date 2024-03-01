
import {FC} from "react";
import {IMovie} from "../../interfaces/movieInterface";


const MovieInfo:FC<{ movieInfo: IMovie }> = ({movieInfo}) => {
    const {id, title, vote_average, poster_path} = movieInfo

    const movie =()=> {
        alert(`Title: ${title}\nVote Average: ${vote_average}`);
    };
     return (
        <div>
            MovieInfo
        </div>
    );
};

export {MovieInfo};