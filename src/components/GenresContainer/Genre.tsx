import {FC, PropsWithChildren} from "react";
import {IGenre, IMovie} from "../../interfaces";
import css from './Genres.module.css'


interface IProps extends PropsWithChildren{
    genre:IGenre,


}
const Genre:FC<IProps> = ({genre}) => {
    const {id,name} = genre;

    return (
        <div >
            <div className={css.Genre}>
                <button>{name}</button>
            </div>

        </div>
    );
};

export {Genre};