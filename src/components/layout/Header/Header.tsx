import styles from "./Header.module.css";
import logo from '../../../assets/icons/FIFA.svg'
import {NavLink, useLocation} from 'react-router-dom'
export const Header = () => {
    const location = useLocation();
    const isLeaguesActive = location.pathname === '/leagues' || location.pathname.startsWith(`/calendar/competition`);
    const isTeamsActive = location.pathname === '/teams' || location.pathname.startsWith('/calendar/teams');

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <NavLink to="/" className={styles.logoLink}>
                    <img
                        className={styles.logo}
                        src={logo}
                        alt="FIFA logo"
                    />
                </NavLink>
                <nav className={styles.nav}>
                    <NavLink
                        to='/leagues'
                        className={`${styles.navLink} ${isLeaguesActive ? styles.active : ''}`}
                    >Лиги</NavLink>
                    <NavLink
                    to='/teams'
                    className={`${styles.navLink} ${isTeamsActive ? styles.active: ''}`}
                    >Команды</NavLink>
                </nav>
            </div>
        </header>
    )
}