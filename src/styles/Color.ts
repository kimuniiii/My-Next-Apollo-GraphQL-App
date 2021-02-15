export const ColorPalette = {
  Black: "#222222",
  White: "#FFFFFF",
  LightGray: "#f4f4f4",
  Gray: "#e4e4e4",
  DarkGray: "#a6a6a6",
  BlueGreen: "#17D4E5",
  Blue: "#1c5db5",
  Yellow: "#FFD91A",
  Red: "#FF1D1C",
  Pink: #ff7683,
  Purple: "#7379FF",
  Green: "#56D99A",
} as const;

export const Tokens = {
  Danger: ColorPalette.Red,
  Success: ColorPalette.Blue,
  TextError: ColorPalette.Red,
  Overlay: ColorPalette.DarkGray,
  Disabled: ColorPalette.Gray,
  Favorite: ColorPalette.Pink,
} as const;
