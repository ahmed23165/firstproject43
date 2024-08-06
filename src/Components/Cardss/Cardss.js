import React from "react";
import  person1 from '../Assets/person1.webp';
import  Person2 from '../Assets/Person2.webp';
import  person3 from '../Assets/person3.webp';
import img2 from '../Assets/img2.webp';
import img3 from '../Assets/img3.webp';
import '../Blogpost/Blogpost.css';
import Card from 'react-bootstrap/Card';
import '../Cardss/Cardss.css';
const Cardss = () => {

   return (
    
    <div>
        <div>
            <h1  className="hwe">Team
            </h1><br/>
            <p className="hwe23">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,<br/> there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the<br/><p className="ff77ww">Semantics, a large language ocean.</p></p>
        </div>
    <div className="zins2">
    <Card style={{ width: '22rem', height: '450px', display: 'flex'}}>
      
      <Card.Img variant="top" src={person3}/>
      <Card.Body>
        <Card.Title>CEO, CO-FOUNDER<br/>Vince Richardson </Card.Title>
        <Card.Text>
       </Card.Text>
      </Card.Body>
      </Card>
      <Card style={{ width: '22rem', height: '450px', display: 'flex'}}>  
      <Card.Img variant="top" src={person1} /> 
      <Card.Body>
        <Card.Title>CTO, CO-FOUNDER<br/>Jean Love</Card.Title>
        <Card.Text>
         
        </Card.Text>
      </Card.Body>  
      </Card>
      <Card style={{ width: '22rem', height: '450px', display: 'flex'}}>
      <Card.Img variant="top" src={Person2} />
      <Card.Body>
        <Card.Title>MARKETER, CO-FOUNDER<br/>Jeff Stark</Card.Title>
        <Card.Text>
        </Card.Text>
      </Card.Body>
    </Card>

</div>
<br/><br/>
<div>
<div className="zins1">
    <Card style={{ width: '22rem', height: '450px', display: 'flex'}}>
      
      <Card.Img variant="top" src={person3}/>
      <Card.Body>
        <Card.Title>CEO, CO-FOUNDER<br/>Vince Richardson</Card.Title>
        <Card.Text>
        </Card.Text>
      </Card.Body>
      </Card>
      <Card style={{ width: '22rem', height: '450px', display: 'flex'}}>  
      <Card.Img variant="top" src={person1} /> 
      <Card.Body>
        <Card.Title>CTO, CO-FOUNDER<br/>Jean Love </Card.Title>
        <Card.Text>
       </Card.Text>
      </Card.Body>  
      </Card>
      <Card style={{ width: '22rem', height: '450px', display: 'flex'}}>
      <Card.Img variant="top" src={Person2} />
      <Card.Body>
        <Card.Title>MARKETER, CO-FOUNDER<br/>Jeff Stark</Card.Title>
        <Card.Text>
     </Card.Text>
      </Card.Body>
    </Card>
    
</div>
</div>
</div>
   )


}

export default Cardss;