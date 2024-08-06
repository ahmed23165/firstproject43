import React from "react";
import '../Cointact/Cointact.css';
const Cointact = () => {
   return (
    <div className="roppp">
   <div className="qe4" >
      <div className="p45">
      <div className="qdf">
    <form>
      <label>
         Enter Your Name <br/><br/>
         <input  type="text" />
      </label>
    </form>
</div>
<div className="gggg2">
<form>
      <label>
         Phone <br/><br/>
         <input  type="text" />
      </label>
    </form>
</div>
</div>
<div className="nvghj">
<form>
      <label>
         Email <br/><br/>
         <input className="qqq44" type="email" />
      </label>
    </form>
</div>
<div className="oyts">
<form>
   <p>Write Message</p>
  <textarea name="message" className="loppp"></textarea>
  <br/>
  
</form>

</div>
<div>
   <button className="mmm22">Send Message</button>
</div>
   </div>
   <div className="nnqqss">
      <p style={{color: 'green'}}>ADDRESS:</p><br/>
      <h1>98 West 21th Street,Suite <br/>721 New York NY 10016 </h1><br/><br/>
      <p  style={{color: 'green'}} >Phone:</p><br/>
      <h1>(+1) 435 3533</h1>
      <br/><br/>
      <p  style={{color: 'green'}} >Email:</p>
      <h1>info@yourdomain.com</h1>
   </div>
   </div>

   )


}
export default Cointact;