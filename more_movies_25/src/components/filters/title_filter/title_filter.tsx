import { Box, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { DataContext, initialSelect } from "../../../utils/context/data_context/data_context";
import { useContext } from "react";

function TitleFilter() {
    const { contextSelected, setContextSelected } = useContext(DataContext);
    const handleResetFilter = async () => {
        setContextSelected({ ...initialSelect, reset: contextSelected.reset + 1 });
    };
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "268px",
                height: "64px",
                mb: "16px",
            }}
        >
            <Typography variant="h6" fontWeight="bold">
                Фильтры
            </Typography>
            <IconButton aria-label="delete" size="large" onClick={handleResetFilter}>
                <CloseIcon />
            </IconButton>
        </Box>
    );
}

export { TitleFilter };
