import { useContext, useEffect, useState } from "react";
import { FilmCard } from "../film_card/film_card";
import { TypeFavorites, TypeResultsFilm } from "../../../type/type";
import { Box } from "@mui/material";
import { DataContext } from "../../../utils/context/data_context/data_context";
import { getFavoriteMovies, getFilms, getSearchMovies } from "../../../api/index";

type TypeFilmContainer = {
    listFilm: TypeResultsFilm[] | null;
    listFavorites: TypeFavorites | null;
};
function FilmContainer() {
    const { contextSelected, setContextSelected } = useContext(DataContext);
    const [filmData, setFilmData] = useState<TypeFilmContainer>({
        listFilm: null,
        listFavorites: null,
    });

    useEffect(() => {
        const selectSort = contextSelected?.sortBy === "По популярности" ? "popular" : "top_rated";

        async function fetchData() {
            if (contextSelected.movieSearch) {
                const { results } = await getSearchMovies(contextSelected.movieSearch, {
                    contextSelected,
                    setContextSelected,
                });

                setFilmData({ ...filmData, listFilm: results });
            } else {
                const { results } = await getFilms(selectSort, { contextSelected, setContextSelected });
                setFilmData({ ...filmData, listFilm: results });
            }
            const data = await getFavoriteMovies();
            setFilmData((prevState) => ({ ...prevState, listFavorites: data }));
        }

        fetchData();
    }, [contextSelected.sortBy, contextSelected.pageNumber, contextSelected.movieSearch]);

    return (
        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
            {filmData.listFilm &&
                filmData.listFilm.map((film) => (
                    <FilmCard key={film.id} film={film} favoriteMovies={filmData.listFavorites} />
                ))}
        </Box>
    );
}

export { FilmContainer };
