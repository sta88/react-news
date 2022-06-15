import axios from "axios";

export default class NewsService {
    static async getAll(limit = 10, page = 1) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
                _limit: limit,
                _page: page
            }
        });
        let data = response.data;

        data.map((item) => {
            item.approved = true;
        });
        return data;
    }

    static async getById(id) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
        return response.data;
    }

    static async getCommentsByNewsId(id) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        return response.data;
    }
}