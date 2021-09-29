import { useEffect,useState } from "react";
import axios from "axios";
import api from "./api";
import Main from "./Main";
import { BrowserRouter,Route } from "react-router-dom";
function App() {
  
  return (
    <BrowserRouter>
      <Route exact path="/"  component={Main}> <Main/> </Route>
    
    </BrowserRouter>
  );
}

export default App;
