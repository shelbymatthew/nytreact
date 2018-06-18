import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import articles from "./pages/articles";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={articles} />
        <Route exact path="/articles" component={articles} />
        <Route exact path="/articles/:id" component={Detail} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
