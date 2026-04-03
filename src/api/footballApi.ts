import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {
    CompetitionMatchesParams,
    CompetitionsResponse,
    MatchesResponse,
    TeamMatchesParams,
    TeamsResponse
} from "./types.ts";

const API_KEY = import.meta.env.VITE_FOOTBALL_API_KEY;
const baseUrl = import.meta.env.DEV ? '/api' : import.meta.env.VITE_API_BASE_URL;

export const footballApi = createApi({
    reducerPath: 'footballApi',
    baseQuery: fetchBaseQuery({
        baseUrl: baseUrl,
        prepareHeaders: (headers) => {
            if (!import.meta.env.DEV && API_KEY) {
                headers.set('X-Auth-Token', API_KEY);
            }
            return headers;
        }
    }),
    endpoints: (builder) => ({
        getCompetitions: builder.query<CompetitionsResponse, void>({
            query: () => '/competitions',
        }),
        getTeams: builder.query<TeamsResponse, void>({
            query: () => '/teams'
        }),
        getCompetitionMatches: builder.query<MatchesResponse, CompetitionMatchesParams>({
            query: ({ id, dateFrom, dateTo }) => {
                let url = `/competitions/${id}/matches`;
                const params = new URLSearchParams();
                if (dateFrom) params.append('dateFrom', dateFrom);
                if (dateTo) params.append('dateTo', dateTo);
                if (params.toString()) url += `?${params.toString()}`;
                return url;
            },
        }),
        getTeamMatches: builder.query<MatchesResponse, TeamMatchesParams>({
            query: ({ id, dateFrom, dateTo }) => {
                let url = `/teams/${id}/matches`;
                const params = new URLSearchParams();
                if (dateFrom) params.append('dateFrom', dateFrom);
                if (dateTo) params.append('dateTo', dateTo);
                if (params.toString()) url += `?${params.toString()}`;
                return url;
            },
        }),
        getCompetitionDetails: builder.query({
            query: (id) => `/competitions/${id}`,
        }),

        getTeamDetails: builder.query({
            query: (id) => `/teams/${id}`,
        }),
    })
});

export const {
    useGetCompetitionsQuery,
    useGetTeamsQuery,
    useGetCompetitionMatchesQuery,
    useGetTeamMatchesQuery,
    useGetCompetitionDetailsQuery,
    useGetTeamDetailsQuery
} = footballApi;