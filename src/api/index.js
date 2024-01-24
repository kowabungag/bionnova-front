import strapiAxios from "./strapiAxios";

class Api {
    constructor($axios) {
        this.$axios = $axios
    }

    async get(endpoint) {
        return this.$axios.get(endpoint)
    }

    async post(endpoint, data) {
        return this.$axios.post(endpoint, {data})
    }
}

export const strapiApi = new Api(strapiAxios);
