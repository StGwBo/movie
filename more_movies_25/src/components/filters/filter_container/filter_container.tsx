import { Paper } from "@mui/material";

import { TitleFilter } from "../title_filter/title_filter";
import { MainSelector } from "../sorting_selector/main_selector/main_selector";
import { SliderYears } from "../slider_years/slider_years";
import { BasicPagination } from "../pagination/pagination";

import style from "./filter_container.module.sass";
import { Search } from "../search/search";

function FilterContainer() {
    return (
        <>
            <Paper elevation={3} className={style.container}>
                <div className="container_up">
                    <TitleFilter />
                    <Search />
                    <MainSelector label="Сортировка по" />
                    <SliderYears />
                    <MainSelector label="Жанры" />
                </div>
                <div className="container_down">
                    <BasicPagination />
                </div>
            </Paper>
        </>
    );
}

export { FilterContainer };
