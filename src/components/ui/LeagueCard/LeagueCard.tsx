import styles from './LeagueCard.module.css'
import vite from '../../../assets/react.svg'
export const LeagueCard = ()=> {
    return (
        <div className={styles.cards}>
            <img
                className={styles.emblem}
                src={vite}
            />
            <div className={styles.info}>
                <p className={styles.name}>Africa Cup</p>
                <p className={styles.areaName}>Africa</p>
            </div>

        </div>

        )
}