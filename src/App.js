import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dropdown from "./Components/Dropdown/Dropdown";
import All from "./Components/All/All";
import Hotel from "./Components/Homes/Hotel";
import About from "./Components/About/About";
import Gallery from "./Components/Gallery/Gallery";
import News from "./Components/News/News";
import Cntact from "./Components/Cntact/Cntact";
const App = () => {
  

  
  return (
    <div>
      <BrowserRouter>
      <Dropdown />
      <Routes>
        <Route  path='/' element={<All/>}/>
        <Route path='/hotel' element={<Hotel/>}/>
        <Route path='/about' element={<About />}/>
        <Route path='/gallery' element={<Gallery />}/>
        <Route  path='/news' element={<News /> }/>
        <Route  path='/contact' element={<Cntact /> }/>
      </Routes>
    </BrowserRouter>
    </div>
  );
};
export default App;
