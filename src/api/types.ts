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