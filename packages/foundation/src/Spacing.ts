const spaces: {
  none: "none";
  // 0px
  xxxs: "xxxs";
  // 4px
  xxs: "xxs";
  // 8px
  xs: "xs";
  // 12px
  sm: "sm";
  // 16px
  md: "md";
  // 24px
  lg: "lg";
  // 32px
  xl: "xl";
  // 48px
  xxl: "xxl";
  // 72px
  xxxl: "xxxl";
  // 96px
} = {
  none: "none",
  // 0px
  xxxs: "xxxs",
  // 4px
  xxs: "xxs",
  // 8px
  xs: "xs",
  // 12px
  sm: "sm",
  // 16px
  md: "md",
  // 24px
  lg: "lg",
  // 32px
  xl: "xl",
  // 48px
  xxl: "xxl",
  // 72px
  xxxl: "xxxl",
  // 96px
};

export type SpacingTypes = keyof typeof spaces;

export default Object.freeze(spaces);
