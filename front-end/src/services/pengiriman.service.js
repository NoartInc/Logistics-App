import http from "../../http-common";

class PengirimanDataService {
  getAll(role, page, limit, search) {
    return http.get(`/pengiriman?role=${role}&page=${page}&limit=${limit}&search=${search}`);
  }
  get(id) {
    return http.get(`/pengiriman/${id}`);
  }
  create(data) {
    return http.post("/pengiriman", data);
  }
  update(id, data) {
    return http.put(`/pengiriman/${id}`, data);
  }
  delete(id) {
    return http.delete(`/pengiriman/${id}`);
  }
  deleteAll() {
    return http.delete(`/pengiriman`);
  }
  exportData(startDate, endDate) {
    return http.get(
      `/pengiriman/export/downloadPengiriman?startDate=${startDate}&endDate=${endDate}`
    );
  }
  getDashboard(results) {
    return http.get(`/pengiriman/dashboard/pengiriman`, results);
  }
}
export default new PengirimanDataService();
