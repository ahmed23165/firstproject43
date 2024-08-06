import React from "react";
import img1 from '../Assets/img1.webp';
import img2 from '../Assets/img2.webp';
import '../Blogpost/Blogpost.css';
import Card from 'react-bootstrap/Card';
import { MDBInput } from 'mdb-react-ui-kit';
import  '../Newstempl/Newstempl.css';
import img3 from '../Assets/img3.webp';
//import img1 from '../Assets/img1.webp';
//import img2 from '../Assets/img2.webp';
//import img5 from '../Assets/img5.webp';
const Newstempl = () => {

   return (
<div className="aaaa1">
<div className="aaaa">
     <div className="aaa">
<Card style={{ width: '18rem', height: '350px', display: 'flex'}}>
      
      <Card.Img variant="top" src={img1}/>
      <Card.Body>
        <Card.Title>45 Best places To<br/> Unwind</Card.Title>
        <Card.Text>
        Far far away, behind the word<br/> mountains, far from the countries<br/> Vokalia and Consonantia, there live 
        </Card.Text>
      </Card.Body>
      </Card>
      <Card style={{ width: '18rem', height: '350px', display: 'flex'}}>  
      <Card.Img variant="top" src={img2} /> 
      <Card.Body>
        <Card.Title>45 Best places To<br/> Unwind</Card.Title>
        <Card.Text>
        Far far away, behind the word<br/> mountains, far from the countries<br/> Vokalia and Consonantia, there live 
        </Card.Text>
      </Card.Body>  
      </Card>
</div>
<div className="aaa">
<Card style={{ width: '18rem', height: '350px', display: 'flex'}}>
      
      <Card.Img variant="top" src={img1}/>
      <Card.Body>
        <Card.Title>45 Best places To<br/> Unwind</Card.Title>
        <Card.Text>
        Far far away, behind the word<br/> mountains, far from the countries<br/> Vokalia and Consonantia, there live 
        </Card.Text>
      </Card.Body>
      </Card>
      <Card style={{ width: '18rem', height: '350px', display: 'flex'}}>  
      <Card.Img variant="top" src={img2} /> 
      <Card.Body>
        <Card.Title>45 Best places To<br/> Unwind</Card.Title>
        <Card.Text>
        Far far away, behind the word<br/> mountains, far from the countries<br/> Vokalia and Consonantia, there live 
        </Card.Text>
      </Card.Body>  
      </Card>
  </div> 
  <div className="aaa">
<Card style={{ width: '18rem', height: '350px', display: 'flex'}}>
      
      <Card.Img variant="top" src={img1}/>
      <Card.Body>
        <Card.Title>45 Best places To<br/> Unwind</Card.Title>
        <Card.Text>
        Far far away, behind the word<br/> mountains, far from the countries<br/> Vokalia and Consonantia, there live 
        </Card.Text>
      </Card.Body>
      </Card>
      <Card style={{ width: '18rem', height: '350px', display: 'flex'}}>  
      <Card.Img variant="top" src={img2} /> 
      <Card.Body>
        <Card.Title>45 Best places To<br/> Unwind</Card.Title>
        <Card.Text>
        Far far away, behind the word<br/> mountains, far from the countries<br/> Vokalia and Consonantia, there live 
        </Card.Text>
      </Card.Body>  
      </Card>
  
  </div>            
  </div>
      <div className="zzzz1">
       <div className="pros2">
      <MDBInput style={{width: '14rem', height: '55px', marginTop: '15px',borderRadius: '10px', borderStyle: 'solid', borderColor: 'red'}} label="search..." id="typeText" type="text" />
      </div>
       <div className="pros3"> 
        <h3 className="pros4">Popular Post</h3>
        <div className="zs">
          <img className="zo1" src={img1} alt="is"/>
         <p className="zs3">February 27,2018<br/><h5>Free Template By <br/> Colorlib</h5></p>
        </div>
       
       <br/>
        <div className="zs">
          <img className="zo1" src={img2} alt="is"/>
         <p className="zs3">February 27,2018<br/><h5>Free Template By <br/> Colorlib</h5></p>
       </div>
       <br/>
       <div className="zs">
          <img className="zo1" src={img1} alt="is"/>
         <p className="zs3">February 27,2018<br/><h5>Free Template By <br/> Colorlib</h5></p>
         </div>
         <br/>
         <div className="zs">
          <img className="zo1" src={img2} alt="is"/>
         <p className="zs3">February 27,2018<br/><h5>Free Template By <br/> Colorlib</h5></p>
       </div>
       <br/>
       <div className="zs">
          <img className="zo1" src={img3} alt="is"/>
         <p className="zs3">February 27,2018<br/><h5>Free Template By <br/> Colorlib</h5></p>
       </div>
              
     </div>
     <br/>
    <div className="wwww">
       <p style={{color: 'red'}}>Categories</p>
       
       <p  style={{color: 'green'}} >Events</p>
       <hr/>
       <p style={{color: 'green'}} >Resto bar</p>
       <hr/>
       <p style={{color: 'green'}} >Celebrations</p>
       <hr/>
       <p style={{color: 'green'}}  >Promos</p>

    </div>
     </div>
</div>     



   )


}
export default Newstempl;

