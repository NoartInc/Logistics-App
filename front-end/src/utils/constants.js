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
    { key: "dikirim", value: "Dikirim" },
    { key: "terkirim", value: "Terkirim" },
    { key: "pending", value: "Pending" },
    { key: "cancel", value: "Cancel" },
  ],
  sales: [],
  driver: [
    { key: "dikirim", value: "Dikirim" },
    { key: "terkirim", value: "Terkirim" },
    { key: "pending", value: "Pending" },
  ],
  CBO: [],
  manager: [],
  telemarketing: [],
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
    allowedRoles: ["administrator", "manager", "CBO", "logistics", "telemarketing"],
  },
  pengiriman_menu: {
    allowedRoles: [
      "administrator",
      "manager",
      "logistics",
      "sales",
      "driver",
      "CBO",
      "teli",
      "telemarketing"
    ],
  },
  user_menu: { allowedRoles: ["administrator"] },
  berita_menu: { allowedRoles: ["administrator", "manager"] },
  utility_menu: {
    allowedRoles: ["administrator", "manager", "logistics", "CBO", "teli", "telemarketing"],
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
      "CBO",
      "driver",
      "telemarketing"
    ],
  },
  master_kendaraan: {
    allowedRoles: ["administrator", "manager", "logistics"],
  },
  master_customer: {
    allowedRoles: ["administrator", "manager", "CBO", "telemarketing"],
  },
  master_teli: {
    allowedRoles: ["administrator", "manager", "teli"],
  },
  master_pengangkutan: {
    allowedRoles: ["administrator", "manager", "logistics"],
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
    allowedStatus_driver: [
      "diproses",
      "dimuat",
      "termuat",
      "dikirim",
      "pending",
    ],
    allowedStatus_logistics: [
      "diproses",
      "dimuat",
      "termuat",
      "dikirim",
      "pending",
    ],
    allowedStatus_teli: ["diproses", "dimuat", "termuat", "dikirim", "pending"],
  },
  delete_pengiriman: {
    allowedRoles: ["administrator"],
  },

  // master kendaraan
  create_kendaraan: {
    allowedRoles: ["administrator", "logistics"],
  },
  update_kendaraan: {
    allowedRoles: ["administrator", "logistics"],
  },
  delete_kendaraan: {
    allowedRoles: ["administrator"],
  },

  // master customer
  create_customer: {
    allowedRoles: ["administrator", "CBO"],
  },
  update_customer: {
    allowedRoles: ["administrator", "CBO"],
  },
  delete_customer: {
    allowedRoles: ["administrator"],
  },

  // master teli
  create_teli: {
    allowedRoles: ["administrator", "teli"],
  },
  update_teli: {
    allowedRoles: ["administrator", "teli"],
  },
  delete_teli: {
    allowedRoles: ["administrator"],
  },

  // master pengangkutan
  create_pengangkutan: {
    allowedRoles: ["administrator", "logistics"],
  },
  update_pengangkutan: {
    allowedRoles: ["administrator", "logistics"],
  },
  delete_pengangkutan: {
    allowedRoles: ["administrator"],
  },

  // export pengiriman
  export_pengiriman: {
    allowedRoles: ["administrator", "logistics", "manager"],
  },
};
