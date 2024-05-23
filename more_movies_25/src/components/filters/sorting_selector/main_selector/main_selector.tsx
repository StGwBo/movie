import { PropsSorting } from "../../../../type/type";
import { SortingSelector } from "../sort_selector/sort_selector";
import { GenresSelector } from "../genres_selector/genres_selector";

const COMPONENT_SORT = "Сортировка по";
const COMPONENT_GENRES = "Жанры";

function MainSelector({label }: PropsSorting) {
    return (
        <>
            {label === COMPONENT_SORT && <SortingSelector label={label} />}
            {label == COMPONENT_GENRES && <GenresSelector label={label} />}
        </>
    );
}

export { MainSelector };
