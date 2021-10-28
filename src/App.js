import "./App.css";
import React from "react";
import ListOfGifs from "./components/ListOfGifs";

import {Link, Route } from "wouter";

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
        <Link href="/gif/panda"> Gifs de pandas</Link>
        <Link href="/gif/gatos"> Gifs de gatos</Link>
        <Link href="/gif/perros"> Gifs de perros</Link>
        <Route path="/gif/:keyword" component={ListOfGifs} />
      </section>
    </div>
  );
}

export default App;
