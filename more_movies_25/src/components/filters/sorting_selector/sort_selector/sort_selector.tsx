import { useContext, useState } from "react";

import { Autocomplete, TextField } from "@mui/material";
import { PropsSorting, TypeSort } from "../../../../type/type";
import { dataSort } from "../../../../data/data";
import { DataContext } from "../../../../utils/context/data_context/data_context";

const DEFAULT_SORT_VALUE = dataSort[1];
const DEFAULT_EMPTY_VALUE = "";

function SortingSelector({ label }: PropsSorting) {
    const [selectedSort, setSelectedSort] = useState<TypeSort>(DEFAULT_SORT_VALUE);
    const { contextSelected, setContextSelected } = useContext(DataContext);

    const handleSortChange = (event: React.SyntheticEvent<Element, Event>, value: TypeSort | null) => {
        if (value) {
            setSelectedSort(value);
            setContextSelected({ ...contextSelected, sortBy: value.name, movieSearch: DEFAULT_EMPTY_VALUE });
        }
    };

    return (
        <Autocomplete
            sx={{ width: "268px", mb: "24px" }}
            id="checkboxes-tags"
            options={dataSort}
            getOptionLabel={(option) => option.name}
            onChange={handleSortChange}
            value={selectedSort}
            renderInput={(params) => <TextField {...params} label={label} />}
        />
    );
}

export { SortingSelector };
