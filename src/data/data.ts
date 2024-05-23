export const dataSort = [
    { id: 0, name: "По популярности" },
    { id: 1, name: "По рейтингу" },
];

const token = localStorage.getItem("token");

export const options = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization: `Bearer ${token}`,
    },
};
