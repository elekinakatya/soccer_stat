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