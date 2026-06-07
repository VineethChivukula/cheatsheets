const prismTheme = {
  plain: {
    color: "var(--home-text)",
    backgroundColor: "var(--deepdark)",
  },
  styles: [
    {
      types: ["comment", "prolog", "doctype", "cdata"],
      style: {
        color: "var(--subtle)",
        fontStyle: "italic",
      },
    },
    {
      types: ["punctuation"],
      style: {
        color: "var(--subtle)",
      },
    },
    {
      types: ["keyword", "builtin"],
      style: {
        color: "var(--logo)",
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
        color: "var(--home-code-green)",
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
        color: "var(--home-code-red)",
      },
    },
  ],
};

export default prismTheme;
