import styles from './MatchTable.module.css'


export const MatchTable = ()=> {
    return (
        <div className={styles.tableWrapper}>
            <table className={styles.table}>
                <tbody>
                <tr className={styles.row}>
                    <td className={styles.date}>ДД.ММ.ГГГГ</td>
                    <td className={styles.time}>ЧЧ.ММ</td>
                    <td className={styles.status}>Статус</td>
                    <td className={styles.team}>Команда A - Команда B</td>
                    <td className={styles.score}>X:Y (Z:G)(N:M)</td>
                </tr>

                <tr className={styles.row}>
                    <td className={styles.date}>ДД.ММ.ГГГГ</td>
                    <td className={styles.time}>ЧЧ.ММ</td>
                    <td className={styles.status}>Статус</td>
                    <td className={styles.team}>Команда A - Команда B</td>
                    <td className={styles.score}>X:Y (Z:G)(N:M)</td>
                </tr>

                <tr className={styles.row}>
                    <td className={styles.date}>ДД.ММ.ГГГГ</td>
                    <td className={styles.time}>ЧЧ.ММ</td>
                    <td className={styles.status}>Статус</td>
                    <td className={styles.team}>Команда A - Команда B</td>
                    <td className={styles.score}>X:Y (Z:G)(N:M)</td>
                </tr>

                </tbody>
            </table>

        </div>
    )
}