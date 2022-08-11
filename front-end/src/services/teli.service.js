import http from "../../http-common";

class TeliDataService {
  getAll() {
    return http.get("/teli");
  }
  get(id) {
    return http.get(`/teli/${id}`);
  }
  getTonase(id) {
    return http.get(`/teli/${id}/count-tonase`)
  }
  create(data) {
    return http.post("/teli", data);
  }
  update(id, data) {
    return http.put(`/teli/${id}`, data);
  }
  delete(id) {
    return http.delete(`/teli/${id}`);
  }
  deleteAll() {
    return http.delete(`/teli`);
  }
  deleteCount() {
    return http.delete(`/teli/delete-count`);
  }
}
export default new TeliDataService();