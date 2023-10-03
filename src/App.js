import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ColorList from "./ColorList";
import ColorDetail from "./ColorDetail";
import AddColorForm from "./AddColorForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/colors" component={ColorList} />
        <Route exact path="/colors/:color" component={ColorDetail} />
        <Route exact path="/colors/new" component={AddColorForm} />
        <Route from="/colors/nope" to="/colors" />
        <Route from="/" to="/colors" />
      </Routes>
    </Router>
  );
}

export default App;
