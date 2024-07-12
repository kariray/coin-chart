import { atom } from "recoil";

export const themeMode = atom({
  key: "themeMode",
  default: false, // Default to light mode
});
