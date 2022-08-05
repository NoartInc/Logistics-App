export const STATUS_PENGIRIMAN = {
  administrator: [
    { key: "diproses", value: "Diproses" },
    { key: "dimuat", value: "Dimuat" },
    { key: "termuat", value: "Termuat" },
    { key: "dikirim", value: "Dikirim" },
    { key: "terkirim", value: "Terkirim" },
    { key: "pending", value: "Pending" },
    { key: "cancel", value: "Cancel" },
  ],
  logistics: [
    { key: "pending", value: "Pending" },
    { key: "cancel", value: "Cancel" },
  ],
  sales: [],
  driver: [
    { key: "dikirim", value: "Dikirim" },
    { key: "terkirim", value: "Terkirim" },
    { key: "pending", value: "Pending" },
  ],
  marketing: [],
  manager: [],
  teli: [
    { key: "dimuat", value: "Dimuat" },
    { key: "termuat", value: "Termuat" },
  ],
};

export const userData = localStorage.getItem("userData")
  ? JSON.parse(localStorage.getItem("userData"))
  : {};

export const ROLES_MANAGEMENTS = {
  // Menu
  dashboard_menu: {
    allowedRoles: ["administrator", "manager"],
  },
  pengiriman_menu: {
    allowedRoles: [
      "administrator",
      "manager",
      "logistics",
      "sales",
      "driver",
      "marketing",
      "teli",
    ],
  },
  user_menu: { allowedRoles: ["administrator"] },
  berita_menu: { allowedRoles: ["administrator", "manager"] },
  utility_menu: { allowedRoles: ["administrator", "manager"] },

  // Child Menu
  create_pengiriman: {
    allowedRoles: ["administrator", "manager", "logistics"],
  },
  list_pengiriman: {
    allowedRoles: [
      "administrator",
      "manager",
      "logistics",
      "sales",
      "teli",
      "marketing",
      "driver",
    ],
  },
  // Actions
  update_pengiriman: {
    allowedRoles: ["administrator", "manager", "logistics", "teli"],
  },
  delete_pengiriman: {
    allowedRoles: ["administrator", "manager"],
  },
};
