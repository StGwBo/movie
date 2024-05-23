import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);
    return (

        <div id="error-page">
            <h1>Вот те на!</h1>
            <p>Sorry.</p>
        </div>
    );
}
