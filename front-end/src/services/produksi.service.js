import http from "../../http-common";

class ProduksiDataService {
  getAll() {
    const result = http.get("/produksi");
    // console.log(http)
    return result
  }
  get(id) {
    return http.get(`/produksi/${id}`);
  }
  // getTonase(startDate, endDate, id) {
  //   return http.get(`/produksi/${id}/count-tonase?startDate=${startDate}&endDate=${endDate}`)
  // }
  create(data) {
    return http.post("/produksi", data);
  }
  update(id, data) {
    return http.put(`/produksi/${id}`, data);
  }
  delete(id) {
    return http.delete(`/produksi/${id}`);
  }
  deleteAll() {
    return http.delete(`/produksi`);
  }
}
export default new ProduksiDataService();