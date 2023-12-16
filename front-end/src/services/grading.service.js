import http from "../../http-common";

class GradingDataService {
  getAll() {
    return http.get("/grading");
  }
  get(id) {
    return http.get(`/grading/${id}`);
  }
  create(data) {
    return http.post("/grading", data);
  }
  update(id, data) {
    return http.put(`/grading/${id}`, data);
  }
  delete(id) {
    return http.delete(`/grading/${id}`);
  }
}
export default new GradingDataService();