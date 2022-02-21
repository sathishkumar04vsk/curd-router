import "./App.css";
import * as React from "react";

import { BrowserRouter as Router, Redirect } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Fragment } from "react";
import { Card, CardMedia } from "@mui/material";
import { About } from "./components/About";
import { Home } from "./components/Home";

function App() {
  return (
    <Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/employes" exact>
            <Employes />
          </Route>
          <Route path="/employes/create" exact></Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="**" exact></Route>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;

const Employes = () => {
  return (
    <div>
      <Card className="profile-card" sx={{ maxWidth: 400 }}>
        <CardMedia
          className="profile"
          component="img"
          image="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          alt="profile_image"
        ></CardMedia>
        <div>
          <h3>Name:</h3>
          <h3>Employe Id:</h3>
          <h3>Working Years:</h3>
          <h3>Job Title:</h3>
        </div>
      </Card>
    </div>
  );
};
