import "./App.css";
import * as React from "react";
import { Fragment } from "react";
import { BrowserRouter as Router, Redirect } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import { About } from "./components/About";
import { Home } from "./components/Home";
import { Employes } from "./components/Employes";

function App() {
  const employes = [
    {
      name: "Santhosh",
      profile:"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      employes_id: "AP9003386",
      working_years: 3,
      department: "Production",
      job_title: "chief Engineer",
    },
    {
      name: "Yuvaraj",
      profile:"https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      employes_id: "AP9003376",
      working_years: 5,
      department: "Production",
      job_title: "junior Engineer",
    },
    {
      name: "Dinesh",
      profile:"https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?size=626&ext=jpg",
      employes_id: "AW9003387",
      working_years: 4,
      department: "Assembley",
      job_title: "Staff",
    },
    {
      name: "Kamesh",
      profile:"https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg",
      employes_id: "AQ90033878",
      working_years: 1,
      department: "Quality",
      job_title: "Engineer",
    },
    {
      name: "Prabu",
      profile:"https://miro.medium.com/max/785/0*Ggt-XwliwAO6QURi.jpg",
      employes_id: "AW9003356",
      working_years: 2,
      department: "Packing",
      job_title: "staff",
    },
    {
      name: "Prakesh",
      profile:"https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg",
      employes_id: "AW9003347",
      working_years: 4,
      department: "Production",
      job_title: "Engineer",
    },
    {
      name: "Madhi",
      profile:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU",
      employes_id: "AW9003337",
      working_years: 6,
      department: "Assembley",
      job_title: "staff",
    },
  ];
  return (
    <Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/employes" exact>
            <Employes employes={employes}/>
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

const AddEmploye =()=>{
  return(
    <div>
      <form>
        
      </form>
    </div>
  );
}
