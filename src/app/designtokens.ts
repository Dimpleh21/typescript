// designTokens.ts
export const colors = {
  primary: "#5c6ac4",
  secondary: "#006fbb",
  success: "#50b83c",
  error: "#d72c16",
  warning: "#ffc453",
  text: "#ffffff",
};

export const spacing = {
  small: "4px",
  medium: "8px",
  large: "16px",
};

export const typography = {
  fontSize: {
    small: "12px",
    base: "16px",
    large: "24px",
  },
  fontWeight: {
    normal: 400,
    bold: 700,
  },
};

export const interactions = {
  hover: {
    background: colors.secondary,
  },
  active: {
    background: colors.success,
  },
  focus: {
    outline: `2px solid ${colors.warning}`,
  },
};
