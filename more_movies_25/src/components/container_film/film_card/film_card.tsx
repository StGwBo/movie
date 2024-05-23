import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { TypeFavorites, TypeResultsFilm } from "../../../type/type";
import { Link } from "react-router-dom";

import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import SnackbarError from "../../../utils/error_notification/snack_bar";
import { handleToggleFavorite } from "../utils";

const EMPTY_STYLES = { textDecoration: "none", color: "inherit" };
export const URL_DB_IMG = "https://image.tmdb.org/t/p/w300";
/// странный экспорт
type PropsTypeResultsFilm = {
    film: TypeResultsFilm;
    favoriteMovies: TypeFavorites | null;
};

function FilmCard({ film, favoriteMovies }: PropsTypeResultsFilm) {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);
    const [isOpenNotification, setIsOpenNotification] = useState<boolean>(false);

    const handleImageLoad = () => {
        setImageLoaded(true);
    };

    useEffect(() => {
        const isFavoriteMovie = favoriteMovies && favoriteMovies.some((movie) => movie.id === film?.id);
        setIsFavorite(isFavoriteMovie as boolean);
    }, [favoriteMovies]);

    return (
        <Card sx={{ width: 296, height: 424, mr: 2, mb: 2 }}>
            <CardActionArea>
                {!imageLoaded && (
                    <div
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            background: "lightgray",
                            zIndex: 1,
                        }}
                    />
                )}
                <Link to={`/details/${film.id}`}>
                    <CardMedia
                        component="img"
                        height="340"
                        image={URL_DB_IMG + film.poster_path}
                        alt={`img ${film.backdrop_path}`}
                        onLoad={handleImageLoad}
                        style={{
                            opacity: imageLoaded ? 1 : 0,
                            transition: "opacity 0.3s ease-in-out",
                        }}
                    />{" "}
                </Link>
            </CardActionArea>
            <CardContent sx={{ display: "flex", padding: 0 }}>
                <CardContent sx={{ width: 232, height: 52 }}>
                    <Link to={`/details/${film.id}`} style={EMPTY_STYLES}>
                        <Typography
                            sx={{ margin: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                            gutterBottom
                            variant="h5"
                            component="div"
                        >
                            {film.title}
                        </Typography>
                    </Link>

                    <Typography variant="body2" color="text.secondary">
                        Рейтинг {film.vote_average.toFixed(1)}
                    </Typography>
                </CardContent>
                <CardActions sx={{ display: "flex", alignItems: "center", mt: "18px" }}>
                    <Button
                        size="small"
                        color="primary"
                        onClick={() =>
                            handleToggleFavorite({
                                id: film.id,
                                setIsFavorite: setIsFavorite,
                                isFavorite: isFavorite,
                                setIsOpenNotification: setIsOpenNotification,
                            })
                        }
                    >
                        {isFavorite ? <StarIcon /> : <StarBorderIcon />}
                    </Button>
                </CardActions>
            </CardContent>
            <SnackbarError
                isOpenNotification={isOpenNotification}
                setIsOpenNotification={setIsOpenNotification}
                isFavorite={isFavorite}
            />
        </Card>
    );
}

export { FilmCard };
