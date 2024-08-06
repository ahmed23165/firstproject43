import React, {useState} from "react";
import "../Dropdown/Dropdown.css";
import { Link } from "react-router-dom";

const Dropdown = () => {

  const [openProfile, setOpenProfile] = useState(false)

  return (
  
      <div>
        <div className="drop" >
      <div >
    <h1 className="drop2"  onClick={() => setOpenProfile((prev) => !prev)}><div className="hover">&#9776;</div></h1></div><div className="hover1">{    openProfile &&    
     
       <ul className="drop1">

  <li> <Link className="drop9" to='/'>Home</Link></li>
<li><Link  className="drop9"  to='/hotel'>Hotel</Link></li>
<li><Link   className="drop9"  to='/about'>About</Link></li>
<li><Link  className="drop9"    to='/gallery'>Gallery</Link></li>
 <li><Link  className="drop9"   to='/news'>News</Link></li>
 <li><Link   className="drop9"   to='/contact'>Contact</Link></li>

</ul>

     
      

}

</div>
</div>  
    
    </div>
  );
};
export default Dropdown;
