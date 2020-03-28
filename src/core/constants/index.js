//const SUB_FOLDER = "/infographics/covid-19/";
const SUB_FOLDER = "/";
export const BASE_URL = `${window.location.protocol}//${window.location.host}`;
/* export const SITE_ROOT = window.location.host.includes("localhost")
  ? SUB_FOLDER
  : "/"; */
export const SITE_ROOT = SUB_FOLDER;

export const PAGE_TYPE_CHART = "chart";
export const PAGE_TYPE_TABLE = "table";
export const PAGE_TYPE_MAP = "map";

export const SORT_KEY_ACTIVE = "active";
export const SORT_KEY_RECOVERIES = "recoveries";
export const SORT_KEY_DEATHS = "deaths";

export const STATE_COLORS = {
  "Andhra Pradesh": "#2e3192",
  Bihar: "#f26d7d",
  Chandigarh: "#06e565",
  Chhattisgarh: "#00aeef",
  Delhi: "#ffcccc",
  Gujarat: "#f73d53",
  Haryana: "#00ffff",
  "Himachal Pradesh": "#ff6971",
  "Jammu and Kashmir": "#cc33ff",
  Karnataka: "#fff200",
  Kerala: "#00aeef",
  Ladakh: "#80f980",
  "Madhya Pradesh": "#a67c52",
  Maharashtra: "#5c931f",
  Manipur: "#8560a8",
  Mizoram: "#f68e56",
  Odisha: "#8c6239",
  Puducherry: "#aba000",
  Punjab: "#9e0039",
  Rajasthan: "#ff66ff",
  "Tamil Nadu": "#8c6239",
  Telangana: "#000088",
  Uttarakhand: "#006666",
  "Uttar Pradesh": "#0000dd",
  "West Bengal": "#790000"
};
