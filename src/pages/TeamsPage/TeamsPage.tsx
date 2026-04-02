import type {Teams} from "../../api/types.ts";
import {useGetTeamsQuery} from "../../api/footballApi.ts";
import {TeamCard} from "../../components/ui/TeamCard/TeamCard.tsx";
import {PageWithSearch} from "../../components/ui/PageWithSearch/PageWithSearch.tsx";


export const TeamsPage = () => {
    const {data, isLoading, error} = useGetTeamsQuery()
    const teams: Teams[] = data?.teams || []


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
           />}>

       </PageWithSearch>
    )
}