import http from "../../http-common";

class TeliDataService {
  getAll() {
    return http.get("/teli");
  }
  get(id) {
    return http.get(`/teli/${id}`);
  }
  getTonase(startDate, endDate, id) {
    return http.get(`/teli/${id}/count-tonase?startDate=${startDate}&endDate=${endDate}`)
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
}
export default new TeliDataService();