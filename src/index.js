import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route, Lazy, Suspense } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import Home from "./pages/Home.jsx";
import Cabecario from "./organisms/Cabecario.jsx";
import About from "./pages/About.jsx";
import Buy from "./pages/Buy.jsx";
import "./atoms/css/animate.min.css";
export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#616161'
    },
    secondary: {
      main: '#d50000'
    }
  },
});
const App = () => {
  return (
    <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Cabecario/>
    <Switch>
      <Route path='/' exact={true} component={Home} />
      <Route path='/aboutus' component={About}/>
      <Route path='/buy' component={Buy}/>
    </Switch>
    </ThemeProvider>
    </BrowserRouter>
  );
};
ReactDOM.render(<App />, document.querySelector("#root"));

