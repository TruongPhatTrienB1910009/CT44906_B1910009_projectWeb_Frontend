import createApiClient from "./api.service";
class ContactService {
    constructor(baseUrl = "/api/contacts") {
        this.api = createApiClient(baseUrl);
    }
    async create(data) {
        return (await this.api.post("/", data)).data;
    }
    async get(email) {
        return (await this.api.get(`/${email}`)).data;
    }
}
export default new ContactService();