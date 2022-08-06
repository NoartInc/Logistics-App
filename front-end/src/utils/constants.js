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
  utility_menu: {
    allowedRoles: ["administrator", "manager", "logistics", "marketing"],
  },

  // Child Menu
  create_pengiriman: {
    allowedRoles: ["administrator", "logistics"],
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
  master_kendaraan: {
    allowedRoles: ["administrator", "manager"],
  },
  master_customer: {
    allowedRoles: ["administrator", "manager", "marketing"],
  },
  master_teli: {
    allowedRoles: ["administrator", "manager"],
  },
  master_pengangkutan: {
    allowedRoles: ["administrator", "manager", "logistics", "marketing"],
  },

  // Actions
  update_pengiriman: {
    allowedRoles: ["administrator", "manager", "logistics", "teli", "driver"],
    allowedStatus_administrator: [
      "diproses",
      "dimuat",
      "termuat",
      "dikirim",
      "terkirim",
      "pending",
      "cancel",
    ],
    allowedStatus_driver: ["dikirim", "terkirim", "pending"],
    allowedStatus_logistics: ["cancel", "pending"],
    allowedStatus_teli: ["dimuat", "termuat"],
  },
  delete_pengiriman: {
    allowedRoles: ["administrator"],
  },

  // master kendaraan
  create_kendaraan: {
    allowedRoles: ["administrator"],
  },
  update_kendaraan: {
    allowedRoles: ["administrator"],
  },
  delete_kendaraan: {
    allowedRoles: ["administrator"],
  },

  // master customer
  create_customer: {
    allowedRoles: ["administrator", "marketing"],
  },
  update_customer: {
    allowedRoles: ["administrator", "marketing"],
  },
  delete_customer: {
    allowedRoles: ["administrator", "marketing"],
  },

  // master teli
  create_teli: {
    allowedRoles: ["administrator"],
  },
  update_teli: {
    allowedRoles: ["administrator"],
  },
  delete_teli: {
    allowedRoles: ["administrator"],
  },

  // master pengangkutan
  create_pengangkutan: {
    allowedRoles: ["administrator", "logistics", "marketing"],
  },
  update_pengangkutan: {
    allowedRoles: ["administrator", "logistics", "marketing"],
  },
  delete_pengangkutan: {
    allowedRoles: ["administrator", "logistics", "marketing"],
  },

  // forms
  update_form_pengiriman: {
    allowedRoles: ["administrator", "manager", "logistics", "teli", "driver"],
    allowedStatus_administrator: [
      "diproses",
      "dimuat",
      "termuat",
      "dikirim",
      "terkirim",
      "pending",
      "cancel",
    ],
    allowedStatus_driver: ["dikirim", "terkirim", "pending"],
    allowedStatus_logistics: ["cancel", "pending"],
    allowedStatus_teli: ["dimuat", "termuat"],
  },
};
