import { TypeFavorites } from "../../../type/type";

type TypeGenres = {
    name: string;
};

type TypeDetailsFilm = {
    backdrop_path: string;
    budget: number;
    genres: TypeGenres[];
    id: number;
    origin_country: string[];
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
};

type TypeCast = {
    character: string;
    name: string;
    profile_path: string;
    id: number;
};

type TypeCrew = {
    name: string;
};

type TypeCastList = {
    cast: TypeCast[];
    crew: TypeCrew[];
    id: number;
};

export type TypeFilmDetails = {
    detailsFilm: TypeDetailsFilm;
    castList: TypeCastList;
    favoriteMovies: TypeFavorites;
};
