import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { Box, TextField, InputAdornment } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../../utils/context/data_context/data_context";

function Search() {
    const [inputSearch, setInputSearch] = useState("");
    const { contextSelected, setContextSelected } = useContext(DataContext);
    const handleSearch = () => {
        setContextSelected({ ...contextSelected, movieSearch: inputSearch });
    };

    const handleKey: React.KeyboardEventHandler<HTMLDivElement> = (event) => {
        if (event.key === "Enter") {
            handleSearch();
        }
    };

    useEffect(() => {
        setInputSearch(contextSelected.movieSearch);
    }, []);
    return (
        <Box sx={{ width: "100%", mb: "25px" }}>
            <TextField
                value={inputSearch}
                label="Поиск по названию"
                onChange={(e) => {
                    setInputSearch(e.target.value);
                }}
                onKeyDown={handleKey}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton type="button" aria-label="search" onClick={handleSearch}>
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />
        </Box>
    );
}

export { Search };
