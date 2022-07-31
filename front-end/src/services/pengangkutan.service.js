import http from "../../http-common";

class PengangkutanDataService {
  getAll() {
    return http.get("/pengangkutan");
  }
  get(id) {
    return http.get(`/pengangkutan/${id}`);
  }
  create(data) {
    return http.post("/pengangkutan", data);
  }
  update(id, data) {
    return http.put(`/pengangkutan/${id}`, data);
  }
  delete(id) {
    return http.delete(`/pengangkutan/${id}`);
  }
  deleteAll() {
    return http.delete(`/pengangkutan`);
  }
}
export default new PengangkutanDataService();