import { Autocomplete, Checkbox, TextField } from "@mui/material";
import { PropsSorting, TypeSort } from "../../../../type/type";
import { useEffect, useState } from "react";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { options } from "../../../../data/data";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

function GenresSelector({ label }: PropsSorting) {
    const [selectedGenres, setSelectedGenres] = useState<TypeSort[]>([]);
    const handleGenresChange = (event: React.SyntheticEvent<Element, Event>, value: TypeSort[]) => {
        setSelectedGenres(value);
    };

    const [dataSorting, setDataSorting] = useState<TypeSort[]>([]);
    useEffect(() => {
        if (options) {
            fetch("https://api.themoviedb.org/3/genre/movie/list?language=ru", options)
                .then((response) => response.json())
                .then((response) => setDataSorting(response.genres))
                .catch((err) => console.error(err));
        }
    }, [options]);

    return (
        <Autocomplete
            sx={{ width: "268px", mb: "24px" }}
            multiple
            disableCloseOnSelect
            id="checkboxes-tags"
            options={dataSorting}
            getOptionLabel={(option) => option.name}
            onChange={handleGenresChange}
            value={selectedGenres}
            renderInput={(params) => <TextField {...params} label={label} />}
            renderOption={(props, option, { selected }) => (
                <li {...props}>
                    <Checkbox icon={icon} checkedIcon={checkedIcon} style={{ marginRight: 8 }} checked={selected} />
                    {option.name}
                </li>
            )}
        />
    );
}

export { GenresSelector };
