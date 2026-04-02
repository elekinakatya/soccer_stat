import styles from './CalendarPage.module.css'
import {DateRangeInput} from "../../components/ui/DateRangeInput/DateRangeInput.tsx";
import {MatchTable} from "../../components/ui/MatchTable/MatchTable.tsx";

export const CalendarPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.date}>
                <DateRangeInput></DateRangeInput>
            </div>
            <div className={styles.table}>
                <MatchTable></MatchTable>
            </div>
        </div>
    )
}