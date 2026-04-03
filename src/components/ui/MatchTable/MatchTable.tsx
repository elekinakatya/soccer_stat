import styles from './MatchTable.module.css'
import type {Match} from "../../../api/types.ts";
import {formatMatchDate, formatMatchTime} from "../../../utils/dateUtils.ts";
import {formatScore, getMatchStatus} from "../../../utils/matchUtils.ts";

interface MatchTableProps {
    matches?: Match[];
    loading?: boolean;
    error?: boolean;

}

export const MatchTable = ({ matches = [], loading = false, error = false }: MatchTableProps)=> {
    if (loading) {
        return <div className={styles.loading}>Загрузка матчей...</div>;
    }

    if (error) {
        return <div className={styles.error}>Ошибка загрузки данных. Попробуйте позже.</div>;
    }

    if (matches.length === 0) {
        return <div className={styles.empty}>Нет матчей за выбранный период</div>;
    }

    return (
        <div className={styles.tableWrapper}>
            <table className={styles.table}>
                <tbody>
                {matches.map((match) => (
                    <tr className={styles.row}>
                        <td className={styles.date}>{formatMatchDate(match.utcDate)}</td>
                        <td className={styles.time}>{formatMatchTime(match.utcDate)}</td>
                        <td className={styles.status}>{getMatchStatus(match.status)}</td>
                        <td className={styles.team}>{match.homeTeam.name} - {match.awayTeam.name}</td>
                        <td className={styles.score}>{formatScore(match)}</td>
                    </tr>
                ))}
                </tbody>
            </table>

        </div>
    )
}