import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "./error_page";
import { ContainerMain } from "../components/container_main/container_main";
import { FilmDetails } from "../components/container_film/film_details/film_details";
import { loaderGetDetails } from "../api/index";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <ContainerMain />,
            },
            {
                path: "/details/:id",
                element: <FilmDetails />,
                loader: loaderGetDetails,
            },
        ],
    },
]);
