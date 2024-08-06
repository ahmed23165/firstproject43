import React from "react";
import '../Customer/Customer.css';
import Person1 from '../Assets/person1.webp'
import Person2 from '../Assets/Person2.webp'
import Person3 from '../Assets/person3.webp'
const Customer = () => {
   return (
    <div class="two1">
    <div class="files2">
     <h1 class="avd1">Happy Customers</h1>
    </div>
     <div class="file1">
       <div class="file2">
         <img class="file5" src={Person1}/><br/><br/>
       <p>“Far far away, behind the word mountains,<br/><br/> far from the countries Vokalia and<br/> <br/>Consonantia, there live the blind texts.<br/><br/> Separated they live in Bookmarksgrove right <br/><br/> at the coast of the Semantics, a large <br/><br/>language ocean.”

        <br/><br/> — Clare Gupta</p>
       </div>
       <div class="file3">
         <img   class="file6"  src={Person2}/><br/><br/>
         <p>Far far away, behind the word mountains,<br/><br/> far from the countries Vokalia and<br/><br/> Consonantia, there live the blind texts.<br/><br/> Separated they live in Bookmarksgrove right <br/><br/>at the coast of the Semantics, a large<br/><br/> language ocean.rdquo;

        <br/><br/> — Rogie Slater</p>
       </div>
       <div  class="file4">
         <img  class="file7"     src={Person3}/><br/><br/>
         <p>“Far far away, behind the word mountains,<br/><br/> far from the countries Vokalia and<br/><br/> Consonantia, there live the blind texts.<br/><br/> Separated they live in Bookmarksgrove right<br/><br/> at the coast of the Semantics, a large<br/><br/> language ocean.”

     <br/> <br/> — John Doe</p>
       </div>
     </div>
</div>



   )


}
export default Customer;