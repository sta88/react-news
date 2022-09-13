import axios from "axios";

export default class NewsService {
    static async getAll(limit = 10, page = 1) {
        const response = await axios.get('https://api.blog.vipplay.ru/wp-json/vip/v1/articles/?per_page=9');
        let data = response.data.articles;

        data.map((item) => {
            item.approved = true;
        });
        return data;
    }

    static async getById(slug) {
        const response = await axios.get('https://api.blog.vipplay.ru/wp-json/vip/v1/articles/' + slug)
        return response.data;
    }

    static async getCommentsByNewsId(id) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        return response.data;
    }
}