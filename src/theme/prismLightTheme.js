// prismLightTheme.js
const prismLightTheme = {
  plain: {
    color: "var(--home-text)",
    backgroundColor: "var(--home-secondary-background)",
  },
  styles: [
    {
      types: ["comment", "prolog", "doctype", "cdata", "punctuation"],
      style: {
        color: "var(--subtle)",
      },
    },
    {
      types: ["keyword", "builtin"],
      style: {
        color: "var(--home-code-red)",
      },
    },
    {
      types: ["operator", "boolean", "tag", "class-name"],
      style: {
        color: "var(--logo)",
      },
    },
    {
      types: ["string", "char", "inserted"],
      style: {
        color: "var(--home-code-purple)",
      },
    },
    {
      types: ["function", "attr-name"],
      style: {
        color: "var(--home-code-purple)",
      },
    },
    {
      types: [
        "number",
        "variable",
        "constant",
        "property",
        "symbol",
        "deleted",
      ],
      style: {
        color: "var(--dark)",
      },
    },
  ],
};

export default prismLightTheme;
