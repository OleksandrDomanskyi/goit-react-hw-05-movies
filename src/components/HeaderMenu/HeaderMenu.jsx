import { NavLink } from "react-router-dom";

import styles from './header-menu.module.scss';

const getActiveLink = ({isActive}) => {
    return isActive ? `${styles.link} ${styles.linkActive}` : `${styles.link}`
}

const HeaderMenu = () => {

    return (
        <ul className={styles.menu}>
            <li>
                <NavLink to="/" className={getActiveLink}>Home</NavLink>
            </li>
            <li>
                <NavLink to="/movies" className={getActiveLink}>Movies</NavLink>
            </li>
        </ul>
    )
}

export default HeaderMenu;