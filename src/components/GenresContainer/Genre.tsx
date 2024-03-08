import {FC, PropsWithChildren} from "react";
import {IGenre, IMovie} from "../../interfaces";
import css from './Genres.module.css'
import {FaStar} from "react-icons/fa";

interface IProps extends PropsWithChildren{
    genre:IGenre,

}
const Genre:FC<IProps> = ({genre}) => {
    const {id,name} = genre;
    // const {id:num,title,vote_average,poster_path} = movie;
    return (
        <div >
            <div className={css.Genre}>{name}</div>
            {/*<div>{title}</div>*/}
            {/*{Array.from({ length: Math.floor(vote_average/2 ) }, (_, index) => (*/}
            {/*    <FaStar key={index} />*/}
            {/*))}*/}

        </div>
    );
};

export {Genre};