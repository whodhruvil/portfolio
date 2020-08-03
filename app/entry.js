import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Featured
import About from "./views/About";
import Contact from "./views/Contact";
import Index from "./views/Index";
import NotFound from "./views/NotFound";
import Projects from "./views/Projects";
import Resume from "./views/Resume";
import Stats from "./views/Stats";
import Tools from "./views/Tools";
import Recomendation from "./views/Recommendation";

// All of our CSS
import "./static/css/main.scss";

ReactDOM.render(
  <Router basename={BASE_PATH}>
    <Switch>
      <Route exact path='/' component={Index} />
      <Route path='/about' component={About} />
      <Route path='/projects' component={Projects} />
      <Route path='/stats' component={Stats} />
      <Route path='/contact' component={Contact} />
      <Route path='/resume' component={Resume} />
      <Route path='/tools' component={Tools} />
      <Route path='/recommendations' component={Recomendation} />
      {/* Only useful in development mode */}
      <Route component={NotFound} status={404} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
