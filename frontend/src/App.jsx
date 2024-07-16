import React from "react";
import "./App.css";
import { BrowserRouter as Router , Route,Routes} from "react-router-dom";
import { RecoilRoot } from "recoil";
import Redirector from "./pages/Redirector";
import Home_page from "./pages/Home_page"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import Allcomponents from "./pages/AllComponents";

const App = () => {
  return (
    <RecoilRoot>
      <Router>
        <Routes>
        <Route path="/"
          element={
            <Redirector />
          }/>
          <Route path="/home" 
          element={
          <Home_page />
          }>
        </Route>
        <Route path="/home/signin" element={<Signin/>}/>
        <Route path="/home/signup" element={<Signup/>}/>
        <Route path="/home/main-page" element={<Allcomponents/>}/>
        
        </Routes>
        
        
    </Router>

    </RecoilRoot>
    
  );
};

export default App;
