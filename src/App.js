import React, { useContext, lazy, Suspense, useState, useEffect } from "react";
import "./App.scss";
import Footer from "./components/Footer";
import imgVirus from "./static/images/virus.png";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import { PAGE_TYPE_MAP } from "./core/constants";
import {
  Typography,
  AppBar,
  Toolbar,
  Grid,
  Container,
} from "@material-ui/core";
import { LanguageContext } from "./languageContext";
import { LANG } from "./core/texts";

const Disha = lazy(() => import("./components/Disha"));
const Main = lazy(() => import("./components/Main"));

function App() {
  const appLanguage = useContext(LanguageContext);
  const [lang, setLang] = useState("ml");

  return (
    <Container>
      <Suspense fallback={<div>Loading...</div>}>
        <LanguageContext.Provider
          value={lang === "ml" ? LANG.MALAYALAM : LANG.ENGLISH}
        >
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
                    <Grid container spacing={2} alignItems="center">
                      <Grid item xs="auto">
                        <Link to="/">
                          <img
                            width="45"
                            className="m-1 ml-2"
                            src={imgVirus}
                            alt=""
                          />
                        </Link>
                      </Grid>
                      <Grid item xs>
                        <Typography variant="h6">
                          {appLanguage.appTitle}
                        </Typography>
                      </Grid>
                    </Grid>
                  </div>
                </Toolbar>
              </AppBar>

              <Switch>
                <Route exact path="/disha">
                  <Disha />
                </Route>
                <Route exact path="/charts">
                  <Main type="table" />
                </Route>
                <Route exact path="/maps">
                  <Main type={PAGE_TYPE_MAP} />
                </Route>
                <Route path="/">
                  <Main type="table" setLang={setLang} />
                </Route>
              </Switch>
              <Footer />
            </div>
          </Router>
        </LanguageContext.Provider>
      </Suspense>
    </Container>
  );
}

export default App;
