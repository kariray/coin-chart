import { DefaultTheme } from "styled-components";

// Dark 모드 테마
export const darkTheme: DefaultTheme = {
  primaryColor: "#000",
  secondaryColor: "#fff",
  background: "#1f1f1f", // 배경색 추가
  text: "#fff", // 텍스트 색상 추가
};

// Light 모드 테마
export const lightTheme: DefaultTheme = {
  primaryColor: "#000",
  secondaryColor: "#fff",
  background: "#fff", // 배경색 추가
  text: "#000", // 텍스트 색상 추가
};
