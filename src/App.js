import "./App.css";
import React from "react";
import ListOfGifs from "./components/ListOfGifs";
import  HomePage  from "./pages/Home";
import  Detail  from "./pages/Detail";

import { Link, Route } from "wouter";

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <Route component={HomePage} path="/" />
        <Route component={Detail} path="/gif/:id" />
        <Route path="/search/:keyword" component={ListOfGifs} />
      </section>
    </div>
  );
}

export default App;
