import styles from './CalendarPage.module.css'
import {DateRangeInput} from "../../components/ui/DateRangeInput/DateRangeInput.tsx";
import {MatchTable} from "../../components/ui/MatchTable/MatchTable.tsx";
import {useGetCompetitionMatchesQuery, useGetTeamMatchesQuery} from "../../api/footballApi.ts";
import {useParams} from "react-router-dom";
import {useState} from "react";
import {Pagination} from "../../components/ui/Pagination/Pagination.tsx";

type CalendarType = 'competition' | 'team';
const ITEMS_PER_PAGE = 10;

export const CalendarPage = () => {
    const {type, id} = useParams<({ type: CalendarType; id: string})>();
    const [dateFrom, setDateFrom] = useState('');
    const [dateTo, setDateTo] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const isCompetition = type === 'competition';

    const bothDatesFilled = dateFrom !== '' && dateTo !== '';
    const showDateError = (dateFrom !== '' || dateTo !== '') && !bothDatesFilled;
    const shouldFetch = bothDatesFilled || (dateFrom === '' && dateTo === '');


    const competitionQuery = useGetCompetitionMatchesQuery(
        {
            id: Number(id),
            dateFrom: dateFrom || undefined,
            dateTo: dateTo || undefined,
        }, {skip: !isCompetition || !shouldFetch});

    const teamQuery = useGetTeamMatchesQuery(
        {
            id: Number(id),
            dateFrom: dateFrom || undefined,
            dateTo: dateTo || undefined,
        }, {skip: isCompetition || !shouldFetch});

    const {data , isLoading, error} = isCompetition ? competitionQuery : teamQuery;

    const handleDateChange = (from: string, to: string) => {
        setDateFrom(from);
        setDateTo(to);
        setCurrentPage(1);
    };

    const matches = data?.matches || [];
    const totalPages = Math.ceil(matches.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentMatches = matches.slice(startIndex, startIndex + ITEMS_PER_PAGE);


    return (
        <div className={styles.container}>
            <div className={styles.date}>
                <DateRangeInput onDateChange={handleDateChange}/>
                {showDateError && (
                    <div className={styles.dateError}>
                        Для фильтрации по дате необходимо заполнить оба поля: "Матчи с" и "по"
                    </div>
                )}
            </div>
            <div className={styles.table}>
                {(dateFrom !== '' && dateTo === '') || (dateFrom === '' && dateTo !== '') ? (
                    <div className={styles.empty}>
                        Пожалуйста, выберите обе даты (начало и конец периода)
                    </div>
                ) : (
                    <>
                    <MatchTable
                        matches={currentMatches}
                        loading={isLoading}
                        error={!!error}
                    />
                        {totalPages > 1 && (
                            <Pagination
                                currentPage={currentPage}
                                totalPages={totalPages}
                                onPageChange={setCurrentPage}
                            />
                        )}
                    </>
                )}
            </div>
        </div>
    )
}