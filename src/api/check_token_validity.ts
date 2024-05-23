export async function checkTokenValidity(token: string) {
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization: `Bearer ${token}`,
        },
    };

    const url = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`;
    try {
        const response = await fetch(url, options);
        if (response.ok) {
            return true;
        } else {
            console.log("false");
            return false;
        }
    } catch (error) {
        console.log(error);
        console.log("error");
    }
}
