import React from "react";
import img3 from '../Assets/img3.webp';
import img1 from '../Assets/img1.webp';
import img2 from '../Assets/img2.webp';
import img5 from '../Assets/img5.webp';
import '../Gallerys/Gallerys.css';
const Gallerys = ()  => {

   return (
     <div>
        <div  className="v11">
      <div>
<h1 className="v2">Hepta</h1>
      </div>
      <div className="v3">
        <h1>Gallery</h1><br/><p>A free template by Colorlib. Download and share!</p>
      </div>
      </div> 
      <div className="t01">
         <img  className="t1" src={img1} />
         <img  className="t1"          src={img2}/>
         <img   className="t1"       src={img3}/>
         <img    className="t1"          src={img5}/>

      </div>
      <div className="t01">
      <img className="t1"     src={img3}/>
      <img  className="t1"         src={img5}/>
      <img  className="t1"         src={img1}/>
      <img className="t1"   src={img2}/>
      </div>

<div className="t04">
    <img className="t02"  src={img1}/>
    <img  className="t03" src={img2}/>
</div>

     </div>



   )


}

export default Gallerys;