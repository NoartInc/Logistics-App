import http from "../../http-common";

class PengirimanIssueService {
  getAll() {
    return http.get("/pengiriman-issue");
  }
  get(id) {
    return http.get(`/pengiriman-issue/${id}`);
  }
  create(data) {
    return http.post("/pengiriman-issue", data);
  }
  update(id, data) {
    return http.put(`/pengiriman-issue/${id}`, data);
  }
  delete(id) {
    return http.delete(`/pengiriman-issue/${id}`);
  }
}
export default new PengirimanIssueService();