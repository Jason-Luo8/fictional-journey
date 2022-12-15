import React from "react";
import { Container } from "@material-ui/core";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";

const App = () => (
  <GoogleOAuthProvider
    client_id={`${process.env.NEXT_PUBLIC_GOOGLE_API_TOKEN}`}
  >
    <Router>
      <Container maxWidth="lg">
        <Navbar />
        <Switch>
          <Route path="/" exact element={<Home />} />
          <Route path="/auth" exact element={<Auth />} />
        </Switch>
      </Container>
    </Router>
  </GoogleOAuthProvider>
);

export default App;
