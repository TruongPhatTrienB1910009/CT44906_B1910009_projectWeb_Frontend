import createApiClient from "./api.service";
class noteService {
    constructor(baseUrl = "/api/myapp") {
        this.api = createApiClient(baseUrl);
    }
    async getAll() {
        return (await this.api.get("/notes")).data;
    }
    async create(data) {
        return (await this.api.post("/notes", data)).data;
    }
    async deleteAll() {
        return (await this.api.delete("/notes")).data;
    }
    async get(id) {
        return (await this.api.get(`/notes/${id}`)).data;
    }
    async update(id, data) {
        return (await this.api.put(`/notes/${id}`, data)).data;
    }
    async delete(id) {
        return (await this.api.delete(`/notes/${id}`)).data;
    }
}
export default new noteService();