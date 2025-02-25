export default ({ addComponents }) => {
  addComponents({
    ".parent-bug": {
      "&:has(.child:nth-child(2))": {
        background: "green",
      },
    },
    ".empty-has-bug": {
      "&:has(:nth-child(2))": {
        background: "yellow",
      },
    },
    ".empty-not-bug": {
      "&:not(:nth-child(1))": {
        background: "blue",
      },
    },
  });
};
