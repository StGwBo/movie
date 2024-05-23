import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/route.tsx";
import { DataProvider } from "./utils/context/data_context/data_context.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <DataProvider>
            <RouterProvider router={router} />
        </DataProvider>
    </React.StrictMode>
);
