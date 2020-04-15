import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Index from "./pages/Index";
import Lyrics from "./pages/Lyrics";
import About from "./pages/about";

import "./App.css";

import { ContextController } from "./context";

const App = () => {
  return (
    <ContextController>
      <Router>
        <>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Index} />
              <Route exact path="/lyrics/track/:id" component={Lyrics} />
              <Route exact path={"/about"} component={About}/>
            </Switch>
          </div>
        </>
      </Router>
    </ContextController>
  );
};

export default App;
