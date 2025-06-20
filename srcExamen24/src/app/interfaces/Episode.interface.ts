export interface IEpisode {
    info: Info;
    results: Episode[];
}

export interface Info {
    count: number;
    pages: number;
    next: null;
    prev: null;
}

export interface Episode {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    characters: string[];
    url: string;
    created: Date;
}
