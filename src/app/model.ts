export type GUID = string;

export interface Band {
    id: GUID;
    name: string;
    bio: string;
    formationYear: number;
    isActive: boolean;
}

export interface User {
    name: string;
    favoriteBandId: GUID;
}
