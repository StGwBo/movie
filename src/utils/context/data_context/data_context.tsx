import { createContext, useState } from "react";
import { TypeDataContext } from "../../../type/type";

const DEFAULT_SORT_VALUE = "По рейтингу";
const DEFAULT_PAGE_NUMBER = 1;
const DEFAULT_TOTAL_PAGES = 500;
const DEFAULT_FILM_HEADER = "";
const DEFAULT_RESET_VALUE = 100;
const DEFAULT_MOVIE_SEARCH = "";

export const initialSelect = {
    sortBy: DEFAULT_SORT_VALUE,
    pageNumber: DEFAULT_PAGE_NUMBER,
    totalPages: DEFAULT_TOTAL_PAGES,
    titleFilm: DEFAULT_FILM_HEADER,
    reset: DEFAULT_RESET_VALUE,
    movieSearch: DEFAULT_MOVIE_SEARCH,
};

const isDataContextType = {
    contextSelected: initialSelect,
    setContextSelected: () => {},
};

export const DataContext = createContext<TypeDataContext>(isDataContextType);

function DataProvider({ children }: { children: React.ReactNode }) {
    const [contextSelected, setContextSelected] = useState(initialSelect);

    return <DataContext.Provider value={{ contextSelected, setContextSelected }}>{children}</DataContext.Provider>;
}

export { DataProvider };
