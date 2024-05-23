type TypeApiError = {
    isFetchError: boolean;
};

export async function postFavoriteAction(movieId: number, isFavorite: boolean): Promise<TypeApiError> {
    const token = localStorage.getItem("token");
    const accountId = localStorage.getItem("accountId");

    const requestBody = {
        media_type: "movie",
        media_id: movieId,
        favorite: isFavorite,
    };

    const options = {
        method: "POST",
        headers: {
            accept: "application/json",
            "content-type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(requestBody),
    };

    const url = `https://api.themoviedb.org/3/account/${accountId}/favorite`;
    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            return {
                isFetchError: true,
            };
        }
        return {
            isFetchError: false,
        };
    } catch (error) {
        return {
            isFetchError: true,
        };
    }
}
