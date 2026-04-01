import styles from './LeagueCard.module.css'

interface LeagueCardProps {
    name: string;
    areaName: string;
    emblem?: string;
    onClick?: () => void;
}
export const LeagueCard = ({name, areaName, emblem,onClick}: LeagueCardProps)=> {
    return (
        <div className={styles.cards} onClick={onClick}>
            <img
                className={styles.emblem}
                src={emblem}
                alt={`${name}'s emblem`}
            />
            <div className={styles.info}>
                <p className={styles.name}>{name}</p>
                <p className={styles.areaName}>{areaName}</p>
            </div>

        </div>

        )
}