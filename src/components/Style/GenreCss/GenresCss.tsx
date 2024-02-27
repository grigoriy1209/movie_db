import css from './Genres.module.css'
import {NavLink} from "react-router-dom";
const GenresCss = () => {
    return (
        <div className={css.Genres}>
            <NavLink to={'genres'}>Genres</NavLink>
            <NavLink to={''}>Search movies and series</NavLink>
        </div>
    );
};

export {GenresCss};