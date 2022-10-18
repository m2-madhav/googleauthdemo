import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { LinkedInCallback } from "react-linkedin-login-oauth2";
import LinkedInPage from "./LinkedinPage";


function App() {
  const typeOfLogin = ["GMAIL", "LINKEDIN"];

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/linkedin" component={LinkedInCallback} />
        <Route path="/" render={() =><LinkedInPage typeOfLogin={typeOfLogin} />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
