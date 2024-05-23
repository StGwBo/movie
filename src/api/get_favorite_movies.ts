import { options } from "../data/data";

export async function getFavoriteMovies() {
    let allMovies = [];
    let currentPage = 1;
    let totalPages = 1;

    while (currentPage <= totalPages) {
        const url = `https://api.themoviedb.org/3/account/20746896/favorite/movies?language=en-US&page=${currentPage}&sort_by=created_at.asc`;
        try {
            const data = await fetch(url, options);
            const jsonData = await data.json();

            allMovies = allMovies.concat(jsonData.results);

            totalPages = jsonData.total_pages;
            currentPage++;
        } catch (error) {
            console.log(error);
        }
    }

    return allMovies;
}
