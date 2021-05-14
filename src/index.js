import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route, Lazy, Suspense } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import Home from "./pages/Home";
import Cabecario from "./organisms/Cabecario";
import About from "./pages/About";
import Buy from "./pages/Buy";
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

