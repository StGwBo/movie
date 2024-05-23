import { useContext } from "react";
import { DataContext } from "../../utils/context/data_context/data_context";
import { FilmContainer } from "../container_film/film_container/film_container";
import { FilterContainer } from "../filters/filter_container/filter_container";

function ContainerMain() {
    const { contextSelected } = useContext(DataContext);

    return (
        <div style={{ display: "flex", justifyContent: "center" }} key={contextSelected.reset}>
            <div
                style={{
                    display: "flex",
                    width: "95%",
                    paddingLeft: "15px",
                    marginBottom: "20px",
                }}
            >
                <FilterContainer />
                <FilmContainer />
            </div>
        </div>
    );
}

export { ContainerMain };
