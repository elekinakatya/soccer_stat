import {SearchInput} from "../../components/ui/SearchInput/SearchInput.tsx";
import styles from "../LeaguesPage/LeaguesPage.module.css";
import {useGetCompetitionsQuery} from "../../api/footballApi.ts";
import {LeagueCard} from "../../components/ui/LeagueCard/LeagueCard.tsx";
import type { Competition } from "../../api/types";
import {useState} from "react";
import {Pagination} from "../../components/ui/Pagination/Pagination.tsx";

const ITEMS_PER_PAGE = 8

export const LeaguesPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const { isLoading, data, error } = useGetCompetitionsQuery();

    console.log('Данные с API:', data);
    if (isLoading) {
        return <div className={styles.loading}>Загрузка лиг...</div>;
    }
    if (error){
        return <div className={styles.error}>Ошибка загрузки данных. Попробуйте позже.</div>
    }

    const leagues: Competition[] = data?.competitions || [];
    const totalPages = Math.ceil(leagues.length / ITEMS_PER_PAGE)

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const currentLeagues = leagues.slice(startIndex, endIndex);
    if (currentPage > totalPages && totalPages > 0) {
        setCurrentPage(1)
    }
    console.log('Количество полученных лиг:', leagues.length);
    console.log('Первая лига:', leagues[0]?.name);
    return (
        <div>
            <div className={styles.search}>
                <SearchInput></SearchInput>
            </div>
            <div className={styles.card}>
                {currentLeagues.map(league => (
                    <LeagueCard
                        name={league.name}
                        areaName={league.area.name}
                        emblem={league.emblem}
                        key={league.id}
                        onClick={() => {}}
                    />
                ))}
            </div>
            {totalPages > 1 && (
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}/>
            )}
        </div>
    )
}