import { createTheme } from "@mui/material";

const theme = createTheme({
  html: {
    margin: 0,
    padding: 0,
    width: "100%",
    height: "100%",
    WebkitOverflowScrolling: "touch",
  },
  body: {
    margin: 0,
    padding: 0,
    width: "100%",
    height: "100%",
  },
  img: {
    display: "block",
    maxWidth: "100%",
  },
  typography: {
    fontFamily: "Kanit",
  },
});

export default theme;
