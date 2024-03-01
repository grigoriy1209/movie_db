import css from './Header.module.css';
import {NavLink} from "react-router-dom";
const Header = () => {
    return (
        <div className={css.Header}>
            <h1>Movies</h1>
            <NavLink to={'movies'}>Movies</NavLink>
            <NavLink to={'genres'}>Genres</NavLink>
        </div>
    );
};

export {Header};