import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {CompetitionsResponse, TeamsResponse} from "./types.ts";

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
        })
    })
});

export const { useGetCompetitionsQuery, useGetTeamsQuery } = footballApi;