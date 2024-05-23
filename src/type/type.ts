export type TypeSort = {
    id: number;
    name: string;
};

export type PropsSorting = {
    label: "Сортировка по" | "Жанры";
};

export type TypeFilmData = {
    page: number;
    results: TypeResultsFilm[];
    total_pages: number;
    total_results: number;
    id: number;
};

export type TypeResultsFilm = {
    adult: boolean;
    backdrop_path: string | null;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string | null;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
};

type Sort = {
    type: "changeSort";
    title: string;
};

type SwitchPage = {
    type: "switchPage";
    pageNumber: number;
};

type TotalPages = {
    type: "totalPages";
    totalPages: number;
};

export type SortActionReducer = Sort | SwitchPage | TotalPages;

export type TypeInitialSelect = {
    sortBy: string;
    pageNumber: number;
    totalPages: number;
    titleFilm: string;
    reset: number;
    movieSearch: string;
};

export type TypeDataContext = {
    contextSelected: TypeInitialSelect;
    setContextSelected: React.Dispatch<React.SetStateAction<TypeInitialSelect>>;
};

export type TypeFavorites = {
    id: number;
}[];
