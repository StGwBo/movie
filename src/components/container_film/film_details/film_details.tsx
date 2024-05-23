import { Link, useLoaderData } from "react-router-dom";
import { TypeFilmDetails } from "./type";
import { Box, Button, CardMedia, IconButton, Typography } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import imgProfileisNone from "../../,,/../../assets/1678347605_bogatyr-club-p-litso-karandashom-foni-vkontakte-46.jpg";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../../utils/context/data_context/data_context";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import SnackbarError from "../../../utils/error_notification/snack_bar";
import { handleToggleFavorite } from "../utils";

const DEFAULT_IS_FAVORITE = false;
const NUMBER_GREATER_THAN_ZERO = 1;

export function FilmDetails() {
    const [isOpenNotification, setIsOpenNotification] = useState<boolean>(false);
    const [isFavorite, setIsFavorite] = useState(DEFAULT_IS_FAVORITE);

    const { contextSelected, setContextSelected } = useContext(DataContext);

    const { detailsFilm, castList, favoriteMovies } = useLoaderData() as TypeFilmDetails;
    const { poster_path, original_title, release_date, budget, origin_country, vote_average, tagline, id } =
        detailsFilm;
    const { cast, crew } = castList;
    const budgetChange = budget.toLocaleString();
    const formattedBuget = budgetChange.length > NUMBER_GREATER_THAN_ZERO ? `${budgetChange}$` : "Хлеб с маслом";
    const formattedAverage = vote_average.toFixed(1);
    const formattedYear = new Date(release_date).getFullYear();
    const URL_DB_IMG = "https://image.tmdb.org/t/p/w300";

    useEffect(() => {
        setContextSelected({ ...contextSelected, titleFilm: original_title });
    }, [original_title]);

    useEffect(() => {
        const isFavoriteMovie = favoriteMovies && favoriteMovies.some((movie) => movie.id === id);
        setIsFavorite(isFavoriteMovie as boolean);
    }, []);

    const handleClearTitle = () => {
        setContextSelected({ ...contextSelected, titleFilm: "" });
    };

    return (
        <div style={{ display: "flex", paddingTop: "4px", width: "100%", justifyContent: "center" }}>
            <div style={{ display: "flex", width: "95%" }}>
                <CardMedia
                    sx={{ height: "402px", width: "300px", mr: "24px" }}
                    image={URL_DB_IMG + poster_path}
                ></CardMedia>
                <Box sx={{ display: "flex", width: "95%", height: "845" }}>
                    <Box sx={{ mr: "50px" }}>
                        <Box sx={{ display: "flex", alignItems: "center", mb: "18px" }}>
                            <Typography variant="h4">
                                {original_title} ({formattedYear})
                            </Typography>
                            <Button
                                size="small"
                                color="primary"
                                onClick={() =>
                                    handleToggleFavorite({
                                        id: id,
                                        setIsFavorite: setIsFavorite,
                                        isFavorite: isFavorite,
                                        setIsOpenNotification: setIsOpenNotification,
                                    })
                                }
                            >
                                {isFavorite ? (
                                    <StarIcon sx={{ display: "flex", justifyContent: "center" }} />
                                ) : (
                                    <StarBorderIcon />
                                )}
                            </Button>
                        </Box>
                        <IconButton sx={{ mb: "22px" }} component={Link} to={`/`} onClick={handleClearTitle}>
                            <KeyboardBackspaceIcon />
                        </IconButton>
                        <Box sx={{ mb: "30px" }}>
                            <Typography sx={{ mb: "10px" }} variant="h5">
                                В главных ролях
                            </Typography>
                            {cast.slice(0, 6).map((c) => (
                                <Typography key={c.id} variant="h6">{`${c.name} в роли ${c.character}`}</Typography>
                            ))}
                        </Box>
                        <Box>
                            <Typography variant="h5">Детали</Typography>
                            <Typography>Бюджет: {formattedBuget}</Typography>
                            <Typography>Страна производства: {origin_country}</Typography>
                            <Typography>Рейтинг: {formattedAverage}</Typography>
                            <Typography>Компания: {tagline}</Typography>
                            <Typography>Продюсер: {crew[0].name}</Typography>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "flex-end",
                            flexWrap: "wrap",
                            height: "432px",
                            width: "600px",
                        }}
                    >
                        {cast.slice(0, 6).map((c) => (
                            <CardMedia
                                key={c.id}
                                sx={{ height: "200px", width: "150px", mr: "10px" }}
                                image={URL_DB_IMG + c.profile_path}
                            >
                                {!c.profile_path && (
                                    <CardMedia
                                        image={imgProfileisNone}
                                        sx={{ height: "200px", width: "150px", mr: "10px", zIndex: 1 }}
                                    />
                                )}
                            </CardMedia>
                        ))}
                    </Box>
                </Box>
            </div>
            <SnackbarError
                isOpenNotification={isOpenNotification}
                setIsOpenNotification={setIsOpenNotification}
                isFavorite={isFavorite}
            />
        </div>
    );
}
