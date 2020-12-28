import axios from "axios";

class Api {
    async fetchAllUsers() {
        const { data } = await axios.get(
            "https://jsonplaceholder.typicode.com/users"
        );
        return data;
    }
}

export const api = new Api();
