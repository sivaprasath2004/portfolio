import React,{useState} from "react";
import axios from 'axios'
const Contact = () => {
  const [userDetails,setUserDetails]=useState({name:"",email:"",subject:"",message:""})
  const [loading,setLOading]=useState(false)
  const [result,setResult]=useState(false)
  async function handleSubmit(e){
    e.preventDefault()
    setLOading(true)
    let res=await axios.post('https://profolio-backend-one.vercel.app/contactus',userDetails)
    setUserDetails({name:"",email:"",subject:"",message:""}) 
    if(res){ 
    setLOading(false) 
    if(res.data.response){
    handleMessages("success")
    }
    else{
    handleMessages("Error")
    }
    return
    } 
    function handleMessages(val){
      setResult(val)
      setTimeout(()=>{
        setResult(false)
      },1500)
    }
  }
  function handleChange(e){
   setUserDetails(pre=>({...pre,[e.target.name]:e.target.value}))
  } 
  return (
    <>
    <div className={`alerting ${result}`}>
      <p>{result==="success"?"✔  success":"Something went wrong"}</p></div>
      <p>Get in Touch</p>
      <h1>Contact Me</h1>
      <div className="ContactUs_container_section">
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
        <input type="text" name="name" placeholder="Name" required onChange={handleChange} value={userDetails.name}/>
        <input type="email" name="email" placeholder="Mail Adress" required onChange={handleChange} value={userDetails.email} />
        <input  type="text" name="subject" placeholder="Subject" required onChange={handleChange} value={userDetails.subject} />
        <textarea required placeholder="Message..." name="message" onChange={handleChange} value={userDetails.message} ></textarea>
        <button type="submit">{loading?<div className="loader"></div>:"submit"}</button>
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
      </div>
    </>
  );
};

export default Contact;
