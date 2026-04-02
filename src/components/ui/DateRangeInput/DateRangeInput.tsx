import styles from './DateRangeInput.module.css'
import {DateInput} from "../DateInput/DateInput.tsx";

export const DateRangeInput = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <p className={styles.label}>Матчи с</p>
                <DateInput></DateInput>
            </div>
            <div className={styles.right}>
                <p className={styles.label}>по</p>
                <DateInput></DateInput>
            </div>

        </div>
    )
}