import React,{useState} from "react";

const Contact = () => {
  const [userDetails,setUserDetails]=useState({name:"",email:"",subject:"",message:""})
  function handleSubmit(e){
    e.preventDefault()
  }
  return (
    <>
      <p>Get in Touch</p>
      <h1>Contact Me</h1>
      <section>
      <div>
        <img id="USER_LOGO" src="https://cdn-icons-png.flaticon.com/128/64/64572.png" alt="user" />
        <div id="Contact_content">
          <img src="https://cdn-icons-png.flaticon.com/128/1483/1483285.png" alt="location" />
          <p>Coimbatore</p>
        </div> 
        <div id="Contact_content">
          <img src="https://cdn-icons-png.flaticon.com/128/542/542689.png" alt="mail" />
          <a href="mailto:prasathsiva2004@gmail.com"><p>prasathsiva2004@gmail.com</p></a>
        </div>
        <div id="Contact_content">
          <img
            src="https://cdn-icons-png.flaticon.com/128/1384/1384014.png"
            alt="linkdin"
          /> 
        <a href="https://www.linkedin.com/in/sivaprasath2004/"><p> Sivaprasath</p></a>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Mail Adress" required />
        <input  type="text" placeholder="Subject" required/>
        <textarea required placeholder="Message..."></textarea>
        <button type="submit">submit</button>
      </form>
      </section>
      <div id="contact_details">
        <a href="mailto:prasathsiva2004@gmail.com">
          <img
            src="https://cdn-icons-png.flaticon.com/128/6244/6244710.png"
            alt="mail"
          />
          prasathsiva2004@gmail.com
        </a>
        <a href="https://www.linkedin.com/in/sivaprasath2004/">
          <img
            src="https://cdn-icons-png.flaticon.com/128/1384/1384014.png"
            alt="linkdin"
          />
          Siva Prasath
        </a>
      </div>
    </>
  );
};

export default Contact;
