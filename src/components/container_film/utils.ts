import { postFavoriteAction } from "../../api";

type TypePropsToggleFavorite = {
    id: number;
    setIsFavorite: React.Dispatch<React.SetStateAction<boolean>>;
    isFavorite: boolean;
    setIsOpenNotification: React.Dispatch<React.SetStateAction<boolean>>;
};

export const handleToggleFavorite = async ({
    id,
    setIsFavorite,
    isFavorite,
    setIsOpenNotification,
}: TypePropsToggleFavorite) => {
    const isError = await postFavoriteAction(id, !isFavorite);
    setIsFavorite((isFavorite) => !isFavorite);
    if (isError.isFetchError) {
        setIsFavorite((isFavorite) => !isFavorite);
        setIsOpenNotification(true);
    }
};
