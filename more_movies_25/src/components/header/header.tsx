import { AccountCircle } from "@mui/icons-material";
import { IconButton, Typography, Toolbar, Box, AppBar } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../utils/context/data_context/data_context";
import { ExitForm } from "../modal_form/exit_form/exit_form";
import { TokenRequestForm } from "../modal_form/token_reques_form/token_reques_form";

const DEFAULT_NOT_AUTHORIZED = "";
const DEFAULT_MODAL_CLOSED = false;

function Header() {
    const [authorization, setAuthorization] = useState(DEFAULT_NOT_AUTHORIZED);
    const [exitState, setExitState] = useState<{
        isOpenExitModal: boolean;
        anchorEl: Element | (() => Element) | null;
    }>({
        isOpenExitModal: DEFAULT_MODAL_CLOSED,
        anchorEl: null,
    });

    const [openRequest, setOpenRequest] = useState(DEFAULT_MODAL_CLOSED);
    const { contextSelected } = useContext(DataContext);

    useEffect(() => {
        const autho = localStorage.getItem("token");
        if (autho) setAuthorization(autho);
    }, [localStorage.getItem("token")]);

    const toggleRequestModal = () => {
        setOpenRequest((openRequest) => !openRequest);
    };

    const toggleExitModal = (event: React.MouseEvent<HTMLElement>) => {
        if (event.currentTarget) {
            setExitState({
                isOpenExitModal: !exitState.isOpenExitModal,
                anchorEl: event.currentTarget,
            });
        }
    };
    return (
        <>
            <AppBar
                position="static"
                sx={{ display: "flex", flexDirection: "row", justifyContent: "center", width: "100%", mb: "20px" }}
            >
                <Box sx={{ width: "95%" }}>
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Фильмы {contextSelected.titleFilm && `- ${contextSelected.titleFilm}`}
                        </Typography>

                        <div>
                            {authorization ? (
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    color="inherit"
                                    onClick={(event) => toggleExitModal(event)}
                                >
                                    <AccountCircle />
                                    {exitState.isOpenExitModal && (
                                        <ExitForm anchorEl={exitState.anchorEl} handleMenu={toggleExitModal} />
                                    )}
                                </IconButton>
                            ) : (
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    color="inherit"
                                    onClick={toggleRequestModal}
                                >
                                    <AccountCircle />
                                </IconButton>
                            )}
                        </div>
                    </Toolbar>
                </Box>
            </AppBar>
            <TokenRequestForm openRequest={openRequest} toggleRequestModal={toggleRequestModal} />
        </>
    );
}

export { Header };
