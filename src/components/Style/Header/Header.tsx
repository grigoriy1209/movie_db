import css from './Header.module.css'
import {NavLink} from "react-router-dom";
const Header = () => {
    return (
        <div className={css.Header}>
            <NavLink to={'movies'}>MOVIE</NavLink>
            <NavLink to={''}>registration</NavLink>
        </div>
    );
};

export {Header};