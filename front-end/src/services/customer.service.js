import http from "../../http-common";

class CustomerDataService {
  getAll() {
    return http.get("/customer");
  }
  get(id) {
    return http.get(`/customer/${id}`);
  }
  create(data) {
    return http.post("/customer", data);
  }
  update(id, data) {
    return http.put(`/customer/${id}`, data);
  }
  delete(id) {
    return http.delete(`/customer/${id}`);
  }
  deleteAll() {
    return http.delete(`/customer`);
  }
}
export default new CustomerDataService();