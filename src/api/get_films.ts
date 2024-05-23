import { options } from "../data/data";
import { TypeDataContext } from "../type/type";

export async function getFilms(selectSort: string, context: TypeDataContext) {
    const { contextSelected, setContextSelected } = context;

    const setTotalPageContext = (value: number) => {
        if (value) {
            setContextSelected({ ...contextSelected, totalPages: value });
        }
    };

    const url = `https://api.themoviedb.org/3/movie/${selectSort}?language=en-US&page=${contextSelected.pageNumber}`;
    try {
        const response = await fetch(url, options);
        const json = await response.json();
        setTotalPageContext(json.total_pages);
        return json;
    } catch (error) {
        console.log(error);
        return { docs: [] };
    }
}
