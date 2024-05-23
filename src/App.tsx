import { Header } from "./components/header/header";
import { Outlet } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "./utils/context/data_context/data_context";

function App() {
    const [authorization, setAuthorization] = useState(false);
    const { contextSelected } = useContext(DataContext);
    useEffect(() => {
        const autho = localStorage.getItem("token");
        if (autho && autho.length > 0) {
            setAuthorization(true);
        } else {
            setAuthorization(false);
        }
    }, [localStorage.getItem("token")]);

    return (
        <>
            <Header key={contextSelected.reset} />
            {authorization && <Outlet />}
        </>
    );
}

export default App;
