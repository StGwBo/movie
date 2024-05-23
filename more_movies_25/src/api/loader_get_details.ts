import { LoaderFunctionArgs } from "react-router-dom";
import { options } from "../data/data";
import { getFavoriteMovies } from "./get_favorite_movies";

export async function loaderGetDetails(routeParameters: LoaderFunctionArgs) {
    const id = routeParameters.params.id;
    const urlDetailsFilm = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
    const urlCastList = `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US'`;
    try {
        const responseFilm = await fetch(urlDetailsFilm, options);
        const responseActors = await fetch(urlCastList, options);
        const detailsFilm = await responseFilm.json();
        const castList = await responseActors.json();
        const favoriteMovies = await getFavoriteMovies();
        return { detailsFilm, castList, favoriteMovies };
    } catch (error) {
        return { docs: [] };
    }
}
