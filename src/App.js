import React, { useContext } from "react";
import "./App.scss";
import Main from "./components/Main";
import Footer from "./components/Footer";
import imgVirus from "./static/images/virus.png";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { PAGE_TYPE_MAP } from "./core/constants";
import { Typography, AppBar, Toolbar } from "@material-ui/core";
import { LanguageContext } from "./languageContext";
import { LANG } from "./core/texts";

function App() {
  const appLanguage = useContext(LanguageContext);
  return (
    <LanguageContext.Provider value={LANG.MALAYALAM}>
      <Router>
        <div className="App">
          <AppBar position="fixed" style={{ background: "#3b6978" }}>
            <Toolbar variant="dense">
              {/* <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton> */}
              <div>
                <div className="row no-gutters align-items-center">
                  <div className="col-auto">
                    <img
                      width="45"
                      className="m-1 ml-2"
                      src={imgVirus}
                      alt=""
                    />
                  </div>
                  <div className="col">
                    <div className="h4 m-0 pl-2">
                      <Typography variant="h6">
                        {" "}
                        {appLanguage.appTitle}
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
            </Toolbar>
          </AppBar>

          <Switch>
            <Route exact path="/charts">
              <Main type="table" />
            </Route>
            <Route exact path="/maps">
              <Main type={PAGE_TYPE_MAP} />
            </Route>
            <Route path="/">
              <Main type="table" />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </LanguageContext.Provider>
  );
}

export default App;
