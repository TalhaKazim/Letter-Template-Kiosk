import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import SignInOutContainer from "./container/Index";
import Registeration from "./components/Registeration";
import Sdash from "./components/Sdash";
import Request from "./components/Request";
import History from "./components/History";
import Tdash from "./components/Tdash";
import Adash from "./components/Adash";
import ViewLetter from "./components/ViewLetter";
import Choose from "./components/Choose";
import ManageTemplate from "./components/ManageTemplate";
import ViewRequest from "./components/ViewRequest";
import TManage from "./components/TManage";
import TView from "./components/TView";
import Ttags from "./components/Ttags";
import TPreview from "./components/TPreview";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/login" element={<SignInOutContainer />} />
        <Route exact path="/Sdash" element={<Sdash />} />
        <Route exact path="/Request" element={<Request />} />
        <Route exact path="/History" element={<History />} />
        <Route exact path="/Tdash" element={<Tdash />} />
        <Route exact path="/ViewLet" element={<ViewLetter/>} />
        <Route exact path="/Adash" element={<Adash />} />
        <Route exact path="/Choose" element={<Choose/>} />
        <Route exact path="/AManage" element={<ManageTemplate/>} />
        <Route exact path="/AView" element={<ViewRequest/>} />
        <Route exact path="/TManage" element={<TManage/>} />
        <Route exact path="/TView" element={<TView/>} />
        <Route exact path="/Ttags" element={<Ttags/>} />
        <Route exact path="/TPreview" element={<TPreview/>} />
      </Routes> 
        

    </div>
  );
};

export default App;
