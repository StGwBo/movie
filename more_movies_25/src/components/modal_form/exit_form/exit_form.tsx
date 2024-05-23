import { Menu, MenuItem } from "@mui/material";
import { useContext } from "react";
import { DataContext } from "../../../utils/context/data_context/data_context";

type TypePropsExit = {
    anchorEl: Element | (() => Element) | null;
    handleMenu: (event: React.MouseEvent<HTMLElement>) => void;
};

function ExitForm({ anchorEl, handleMenu }: TypePropsExit) {
    const { contextSelected, setContextSelected } = useContext(DataContext);
    const handleExit = (event: React.MouseEvent<HTMLElement>) => {
        localStorage.removeItem("token");
        localStorage.removeItem("accountId");
        handleMenu(event);
        setContextSelected({ ...contextSelected, reset: +1 });
    };

    return (
        <div>
            <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                open={Boolean(anchorEl)}
            >
                <MenuItem onClick={handleExit}>Выйти</MenuItem>
            </Menu>
        </div>
    );
}

export { ExitForm };
