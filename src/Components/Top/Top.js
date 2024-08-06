import React from "react";
import img1 from '../Assets/img1.webp';
import img2 from '../Assets/img2.webp';
import img3 from '../Assets/img3.webp';
import img5 from '../Assets/img5.webp';
import '../Top/Top.css';
const Top = () => {

   return(
    <div  className="im15">
<div className="im9">
<div className="im8">
  <h1 className="f1">Top Destination</h1>
  <p className="fRT">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In dolor, iusto doloremque quo<br/> odio repudiandae sunt eveniet? Enim facilis laborum voluptate id porro, culpa maiores<br/><p className="ttuuoo"> quis, blanditiis laboriosam alias. Sed.</p></p>
</div>
</div>
<div className="im3" >
  <div>
  <img     className="im1"    src={img1}/><br/><h3>Food & Wines</h3>
  </div>
  <div>
  <img    className="im1"      src={img2}/><br/><h3>Resort & Spa</h3>
  </div>
  <div> 
  <img     className="im1"       src={img3}/><br/><h3>Hotel Rooms</h3>
  </div>
  <div>
  <img       className="im1"           src={img5}/><br/><h3>Mountain Climbing</h3>
  </div>
</div>
</div>



   )


}
export default Top;