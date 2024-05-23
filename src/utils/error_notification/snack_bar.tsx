import Snackbar from "@mui/material/Snackbar";

type TypePropssSnackbar = {
    isOpenNotification: boolean;
    setIsOpenNotification: React.Dispatch<React.SetStateAction<boolean>>;
    isFavorite: boolean;
};

export default function SnackbarError({ isOpenNotification, setIsOpenNotification, isFavorite }: TypePropssSnackbar) {
    const succeeded = isFavorite ? "удалить из избранного" : "добавить в избранное";
    const handleClose = () => {
        setIsOpenNotification(false);
    };
    return (
        <Snackbar
            color="inherit"
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            open={isOpenNotification}
            onClose={handleClose}
            message={`Не удалось ${succeeded}`}
        />
    );
}
