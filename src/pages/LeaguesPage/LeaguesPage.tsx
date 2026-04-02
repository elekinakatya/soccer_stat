import {useGetCompetitionsQuery} from "../../api/footballApi.ts";
import {LeagueCard} from "../../components/ui/LeagueCard/LeagueCard.tsx";
import type { Competition } from "../../api/types";
import {PageWithSearch} from "../../components/ui/PageWithSearch/PageWithSearch.tsx";

export const LeaguesPage = () => {
    const { isLoading, data, error } = useGetCompetitionsQuery();
    const leagues: Competition[] = data?.competitions || [];

    return (
        <>
        <PageWithSearch
            loading={isLoading}
            error={!!error}
            items={leagues}
            filterFn={(league, query) => league.name.toLowerCase().includes(query) ||
        league.area.name.toLowerCase().includes(query)}
            getKey={(league) => league.id}
            renderItem={(league) =>
                <LeagueCard
                    name={league.name}
                    emblem={league.emblem}
                    areaName={league.area.name}
                />

            }/>
        </>


    )
}