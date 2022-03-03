import axios from "axios";

const getApiUrl = () => {
    const apiUrl = process.env.REACT_APP_CHESS_API;

    if (apiUrl === undefined) {
        throw new Error(
            "You have not provided REACT_APP_CHESS_API enviroment variable"
        );
    }
    return `${apiUrl}/pub/`;
};

const client = axios.create({
    baseURL: getApiUrl(),
});

client.interceptors.response.use(
    (response) => response.data,
    (error) => {
        if (!error.response) {
            return Promise.reject({ message: error.message });
        }
        return Promise.reject({
            message: error.response.status.Text,
            ...error.response.data,
        });
    }
);

export default client;
