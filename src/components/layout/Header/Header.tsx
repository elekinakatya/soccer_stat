import styles from "./Header.module.css";
import logo from '../../../assets/icons/FIFA.svg'
import {NavLink} from 'react-router-dom'
export const Header = () => {
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
                        className={({isActive}) =>
                            `${styles.navLink} ${isActive ? styles.active : ''}`}
                    >Лиги</NavLink>
                    <NavLink
                    to='/teams'
                    className={({isActive}) =>`${styles.navLink} ${isActive ? styles.active: ''}`}
                    >Команды</NavLink>
                </nav>
            </div>
        </header>
    )
}