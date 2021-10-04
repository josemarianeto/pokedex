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
