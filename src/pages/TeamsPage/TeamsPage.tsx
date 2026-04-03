import type {Teams} from "../../api/types.ts";
import {useGetTeamsQuery} from "../../api/footballApi.ts";
import {TeamCard} from "../../components/ui/TeamCard/TeamCard.tsx";
import {PageWithSearch} from "../../components/ui/PageWithSearch/PageWithSearch.tsx";
import {useNavigate} from "react-router-dom";


export const TeamsPage = () => {
    const navigate = useNavigate();
    const {data, isLoading, error} = useGetTeamsQuery()
    const teams: Teams[] = data?.teams || []

    const handleLeagueClick = (teamsId: number) => {
        navigate(`/calendar/teams/${teamsId}`);
    }

    return (
       <PageWithSearch
           loading={isLoading}
           error={!!error}
           items={teams}
           filterFn={(team, query) =>
               team.name.toLowerCase().includes(query)
           }
           getKey={(team)=> team.id}

           renderItem={(team) =>
           <TeamCard name={team.name}
                     crest={team.crest}
                     onClick={() => handleLeagueClick(team.id)}
           />}>

       </PageWithSearch>
    )
}