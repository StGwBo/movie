import { options } from "../data/data";
import { TypeDataContext } from "../type/type";

export async function getSearchMovies(titleSearch: string, context: TypeDataContext) {
    const { contextSelected, setContextSelected } = context;

    const setTotalPageContext = (value: number) => {
        if (value) {
            setContextSelected({ ...contextSelected, totalPages: value });
        }
    };

    const url = `https://api.themoviedb.org/3/search/movie?query=${titleSearch}&include_adult=true&language=en-US&page=${contextSelected.pageNumber}`;
    try {
        const response = await fetch(url, options);
        const json = await response.json();
        setTotalPageContext(json.total_pages);
        console.log(json);

        return json;
    } catch (error) {
        console.log(error);
    }
}
