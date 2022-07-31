import http from "../../http-common";

class KendaraanDataService {
  getAll() {
    return http.get("/kendaraan");
  }
  get(id) {
    return http.get(`/kendaraan/${id}`);
  }
  create(data) {
    return http.post("/kendaraan", data);
  }
  update(id, data) {
    return http.put(`/kendaraan/${id}`, data);
  }
  delete(id) {
    return http.delete(`/kendaraan/${id}`);
  }
  deleteAll() {
    return http.delete(`/kendaraan`);
  }
}
export default new KendaraanDataService();