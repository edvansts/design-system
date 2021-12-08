const fontSizes: {
  xs: "xs";
  sm: "sm";
  md: "md";
  lg: "lg";
  xl: "xl";
} = {
  xs: "xs", // 12px
  sm: "sm", // 0.875rem
  md: "md", // 16px
  lg: "lg", // 18px
  xl: "xl", // 24px
};

export type FontSizesTypes = keyof typeof fontSizes;

export default Object.freeze(fontSizes);
