export const STATUS_PENGIRIMAN = {
  administrator: [
    { key: "diproses", value: "Diproses" },
    { key: "dicetak", value: "Dicetak" },
    { key: "dimuat", value: "Dimuat" },
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
  ],
  produksi: [
    { key: "dicetak", value: "Dicetak" },
  ],
};

export const userData = localStorage.getItem("userData")
  ? JSON.parse(localStorage.getItem("userData"))
  : {};

export const ROLES_MANAGEMENTS = {
  // Menu
  dashboard_menu: {
    allowedRoles: ["administrator", "manager", "CBO", "logistics", "telemarketing", "produksi"],
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
      "telemarketing",
      "produksi"
    ],
  },
  user_menu: { allowedRoles: ["administrator"] },
  berita_menu: { allowedRoles: ["administrator", "manager"] },
  utility_menu: {
    allowedRoles: ["administrator", "manager", "logistics", "CBO", "teli", "telemarketing", "produksi"],
  },

  // Child Menu
  create_pengiriman: {
    allowedRoles: ["administrator", "logistics"],
  },
  exclude_pengiriman: {
    allowedRoles: ["administrator", "manager"]
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
      "telemarketing",
      "produksi"
    ],
  },
  master_kendaraan: {
    allowedRoles: ["administrator", "manager", "logistics"],
  },
  master_customer: {
    allowedRoles: ["administrator", "manager", "CBO", "telemarketing", "logistics"],
  },
  master_teli: {
    allowedRoles: ["administrator", "manager", "teli"],
  },
  master_pengangkutan: {
    allowedRoles: ["administrator", "manager", "logistics"],
  },
  master_produksi: {
    allowedRoles: ["administrator", "manager", "produksi"],
  },
  master_grading: {
    allowedRoles: ["administrator", "manager"]
  },
  // Actions
  update_pengiriman: {
    allowedRoles: ["administrator", "manager", "logistics", "teli", "driver", "produksi"],
    allowedStatus_administrator: [
      "diproses",
      "dimuat",
      "dicetak",
      "dikirim",
      "terkirim",
      "pending",
      "cancel",
    ],
    allowedStatus_driver: [
      "diproses",
      "dimuat",
      "dicetak",
      "dikirim",
      "pending",
    ],
    allowedStatus_logistics: [
      "diproses",
      "dimuat",
      "dicetak",
      "dikirim",
      "pending",
    ],
    allowedStatus_teli: [
      "diproses", 
      "dimuat",
      "dicetak",
      "dikirim",
      "pending",
    ],
    // disini allowedStatus ada
    allowedStatus_produksi: [
      "diproses", 
      "dimuat",
      "dicetak",
      "dikirim",
      "pending",
    ],
  },
  delete_pengiriman: {
    allowedRoles: ["administrator", "logistics"],
    allowedStatus_administrator: [
      "diproses",
      "dimuat",
      "dicetak",
      "dikirim",
      "terkirim",
      "pending",
      "cancel",
    ],
    allowedStatus_logistics: [
      "diproses",
      "dimuat",
      "dicetak",
      "dikirim",
      "pending",
    ],
  },
  modify_pengiriman: {
    allowedRoles: ["administrator", "logistics"],
    // disini allowedstatus gak ada
    // makanya dibaca => gak boleh akses
    // soalnya operand'nya && 
    allowedStatus_administrator: [
      "diproses",
      "dimuat",
      "dicetak",
      "dikirim",
      "terkirim",
      "pending",
      "cancel",
    ],
    allowedStatus_logistics: [
      "diproses",
      "dimuat",
      "dicetak",
      "dikirim",
      "pending",
    ],
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
    allowedRoles: ["administrator", "CBO", "logistics"],
  },
  update_customer: {
    allowedRoles: ["administrator", "CBO", "logistics"],
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

  // master produksi
  create_produksi: {
    allowedRoles: ["administrator", "produksi"],
  },
  update_produksi: {
    allowedRoles: ["administrator", "produksi"],
  },
  delete_produksi: {
    allowedRoles: ["administrator"],
  },

  // export pengiriman
  export_pengiriman: {
    allowedRoles: ["administrator", "logistics", "manager"],
  },
};
