export async function getAccoutId(apiResponse: string) {
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization: `Bearer ${apiResponse}`,
        },
    };

    const url = "https://api.themoviedb.org/3/account/account_id";
    try {
        const responseAccount = await fetch(url, options);
        const jsonAccount = await responseAccount.json();

        return jsonAccount.id;
    } catch (error) {
        console.log(error);
    }
}
