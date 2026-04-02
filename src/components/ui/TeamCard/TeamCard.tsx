import styles from './TeamCard.module.css'

interface TeamCardProps {
    name: string;
    crest?: string;
    onClick?: () => void;
}
export const TeamCard = ({name, crest,onClick}: TeamCardProps)=> {
    return (
        <div className={styles.cards} onClick={onClick}>
            <img
                className={styles.emblem}
                src={crest}
                alt={`${name}'s emblem`}
            />
            <div className={styles.info}>
                <p className={styles.name}>{name}</p>
            </div>

        </div>

    )
}