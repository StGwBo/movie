import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useContext } from "react";
import { DataContext } from "../../../utils/context/data_context/data_context";

function BasicPagination() {
    const { contextSelected, setContextSelected } = useContext(DataContext);

    const handleSortChange = (event: React.ChangeEvent<unknown>, value: number) => {
        if (value) {
            setContextSelected({ ...contextSelected, pageNumber: value });
        }
    };

    return (
        <Stack spacing={0} sx={{ width: 298, height: 80, display: "flex", alignItems: "center" }}>
            <Pagination
                siblingCount={0}
                boundaryCount={1}
                count={contextSelected?.totalPages}
                color="primary"
                onChange={handleSortChange}
                page={contextSelected.pageNumber}
            />
        </Stack>
    );
}

export { BasicPagination };
