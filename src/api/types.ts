export interface Area {
    id: number;
    name: string;
    code: string;
}

export interface Competition {
    id: number;
    name: string;
    code: string;
    type: string;
    emblem?: string;
    area: Area;
}

export interface CompetitionsResponse {
    count: number;
    competitions: Competition[];
}

export interface Teams {
    id: number;
    name: string;
    shortName?: string;
    tla?: string;
    crest?: string;
    address?: string;
    website?: string;
    founded?: number;
    clubColors?: string;
    venue?: string;
    area?: Area;
}
export interface TeamsResponse {
    count: number;
    teams: Teams[];
}

export interface CompetitionMatchesParams {
    id: number;
    dateFrom?: string;
    dateTo?: string;
}
export interface TeamMatchesParams {
    id: number;
    dateFrom?: string;
    dateTo?: string;
}

export interface Match {
    id: number;
    utcDate: string;
    status: string;
    homeTeam: {
        id: number;
        name: string;
        crest?: string;
    };
    awayTeam: {
        id: number;
        name: string;
        crest?: string;
    };
    score: {
        fullTime: {
            home: number | null;
            away: number | null;
        };
        extraTime?: {
            home: number | null;
            away: number | null;
        };
        penalties?: {
            home: number | null;
            away: number | null;
        };
    };
}


export interface MatchesResponse {
    count: number;
    filters: {
        dateFrom?: string;
        dateTo?: string;
    };
    competition?: {
        id: number;
        name: string;
    };
    matches: Match[];
}