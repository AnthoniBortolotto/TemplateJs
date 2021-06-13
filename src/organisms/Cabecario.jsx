import { Box, Grid } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Typography from "@material-ui/core/Typography";
import React from "react";
import logo from "../atoms/img/logo.jpg";

const useStyles = makeStyles((theme) => ({
  headerStyle: {
    background: "#616161",
    marginTop: "-0.5%",
    marginLeft: "-0.5%",
    width: "101%",
  },
  headerImg: {
    [theme.breakpoints.up("xs")]: {
      visibility: "hidden",
    },
    [theme.breakpoints.up("md")]: {
      visibility: "hidden",
    },
    [theme.breakpoints.up("lg")]: {
      visibility: "visible",
    },
  },
  AppBarStyle: {},
  TituloCabecalhoStyle: {
    background: "#616161",
    marginLeft: "-0.5%",
    textAlign: "center",
    width: "101%",
  },
  TabNormalStyle: {
    [theme.breakpoints.up("xs")]: {
      width: "33%",
    },
    [theme.breakpoints.up("md")]: {
      width: "15%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "11%",
    },
  },
}));

export default function NavTabs() {
  const classes = useStyles();
  let TabInicial;
  if (window.location.pathname === "/buy") TabInicial = 1;
  // Temporário
  else if (window.location.pathname === "/aboutus") TabInicial = 2;
  else TabInicial = 0;
  const [TabSelecionada, setTab] = React.useState(TabInicial);

  const handlerChange = () => {
    setTab(Tab);
  };

  return (
    <Box className={classes.headerStyle}>
      <AppBar color="inherit" position="static">
        <Grid className={classes.TituloCabecalhoStyle} justify="space-between">
          <Typography variant="h3">
            <img className={classes.headerImg} src={logo} alt="logo" />
            Roda Viva Ltda.
          </Typography>
        </Grid>
        <Tabs
          className={classes.headerStyle}
          variant="standard"
          value={TabSelecionada}
          onChange={handlerChange}
        >
          <Tab
            component="a"
            className={classes.TabNormalStyle}
            href="/"
            label="Home"
          />
          <Tab
            component="a"
            className={classes.TabNormalStyle}
            href="/buy"
            label="Buy"
          />
          <Tab
            component="a"
            className={classes.TabNormalStyle}
            href="/aboutus"
            label="About us"
          />
        </Tabs>
      </AppBar>
    </Box>
  );
}
