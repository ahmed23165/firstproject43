import React from "react";
import Home from "../Home/Home";
import Carasuol from "../Carasuol/Carasuol";
import Blogpost from "../Blogpost/Blogpost";
import Customer from "../Customer/Customer";
import Top from "../Top/Top";
import Quick from "../Quick/Quick";

const All = () => {
   return (
    <div className="poll">
        <Home/>
        <Carasuol />
        <Blogpost />
        <Customer />
        <Top />
        <Quick />
    </div>


   )


}
export default All;