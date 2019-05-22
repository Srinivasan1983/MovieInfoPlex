import React from "react";
import { Route } from "react-router-dom";

import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Landing from "./home/Landing";
import Movie from "./home/Movie";
import YoutubeLandingPage from "./home/youtube/YoutubeLandingPage";

const App = () => {
  return (
    <div>
      <Header />
      <Route exact path="/" component={Landing} />
      <Route exact path="/movie/:id" component={Movie} />
      <Route exact path="/youtube" component={YoutubeLandingPage} />
      <Footer />
    </div>
  );
};

export default App;
