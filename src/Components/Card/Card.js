import React from "react";
import '../Card/Card.css';
import img1 from '../Assets/img1.webp';
import img2 from '../Assets/img2.webp';
import img3 from '../Assets/img3.webp';
import '../Blogpost/Blogpost.css';
import Card from 'react-bootstrap/Card';
const Cards = () => {
    return (
     <div className="cd1">
<div className="cd2">
<h1 style={{fontSize: '60px',marginLeft: '25px'}}>More Hotel Features</h1><br/>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In dolor, iusto doloremque quo<br/> odio repudiandae sunt eveniet? Enim facilis laborum voluptate id porro, culpa maiores<br/> <p style={{marginLeft: '160px'}}>quis, blanditiis laboriosam alias. Sed.</p></p>
     </div>
     <div className="zins">
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
      <Card style={{ width: '18rem', height: '350px', display: 'flex'}}>
      <Card.Img variant="top" src={img3} />
      <Card.Body>
        <Card.Title>45 Best places To<br/> Unwind</Card.Title>
        <Card.Text>
        Far far away, behind the word<br/> mountains, far from the countries<br/> Vokalia and Consonantia, there live 
        </Card.Text>
      </Card.Body>









    </Card>

</div>



     </div>


    )



}
export default Cards;