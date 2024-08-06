import React from "react";
import Card from 'react-bootstrap/Card';
import img1 from '../Assets/img1.webp';
import img2 from '../Assets/img2.webp';
import img3 from '../Assets/img3.webp';
import '../Blogpost/Blogpost.css';
const Blogpost = () => {

  return (
    
    <div className="old1">
    <h1 className="old2">Recent Blog Post</h1>
    <p className="old3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,<br/> there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the<br/> Semantics, a large language ocean.</p>
    
     
     <div className="zin">
    <Card  className="sin5" >
        <Card.Img variant="top" src={img1}/>
      <Card.Body>
        <Card.Title>45 Best places To<br/> Unwind</Card.Title>
        <Card.Text>
        Far far away, behind the word<br/> mountains, far from the countries<br/> Vokalia and Consonantia, there live the<br/> blind texts.
        </Card.Text>
      </Card.Body>
      </Card>
      <Card className="sin5">  
      <Card.Img variant="top" src={img2} /> 
      <Card.Body>
        <Card.Title>45 Best places To<br/> Unwind</Card.Title>
        <Card.Text>
        Far far away, behind the word<br/> mountains, far from the countries<br/> Vokalia and Consonantia, there live the<br/> blind texts.
        </Card.Text>
      </Card.Body>  
      </Card>
      <Card className="sin5">
      <Card.Img variant="top" src={img3} />
      <Card.Body>
        <Card.Title>45 Best places To<br/> Unwind</Card.Title>
        <Card.Text>
        Far far away, behind the word<br/> mountains, far from the countries<br/> Vokalia and Consonantia, there live the<br/> blind texts.
        </Card.Text>
      </Card.Body>









    </Card>

</div>
</div>
  )

}
export default Blogpost;