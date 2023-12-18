import http from "../../http-common";

class PengirimanDataService {
  getAll(role, page, limit, search, filters) {
    return http.get(
      `/pengiriman?role=${role}&page=${page}&limit=${limit}&search=${search}&filters=${JSON.stringify(filters)}`
    );
  }
  get(id) {
    return http.get(`/pengiriman/${id}`);
  }
  create(data) {
    return http.post("/pengiriman", data);
  }
  update(id, data) {
    let dataForm = data;
    if (typeof data?.image !== 'undefined') {
      dataForm = new FormData();
      for (const [key, value] of Object.entries(data)) {
        dataForm.append(key, value);
      }
    }
    return http.post(`/pengiriman/${id}/update`, dataForm, {
      headers: {
        "Content-Type": typeof data?.image !== 'undefined' ? "multipart/form-data" : "application/x-www-form-urlencoded",
      },
    });
  }
  updateData(id, data) {
    return http.put(`/pengiriman/${id}/update-data`, data);
  }
  updateInformasi(id, data) {
    return http.put(`/pengiriman/${id}/update-informasi`, data);
  }
  updateExclude(id, data) {
    return http.put(`/pengiriman/${id}/update-exclude`, data);
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
