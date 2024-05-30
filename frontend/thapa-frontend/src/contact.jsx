import { useState } from "react";
import { useAuth } from "./store/auth";
import {toast} from 'react-toastify'
// import "./contact.css"
const Contact = () => {
  const [contact, setContact] = useState({
    username: "",
    email: "",
    message: "",
  });

  const{API} =useAuth();


  const[userdata,setUserdata]=useState(true);

  // lets tackle our handleInput
  const handleInput = (e) => {



    const name = e.target.name;
    const value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    });
    // console.log(contact);
  };

  // handle fomr getFormSubmissionInfo
  const handleSubmit = async (e) => {
    e.preventDefault();
// posting the data input by suer in backend

try{

  const response =await fetch(`${API}/api/form/contact`,{
    method:'POST',
    headers:{"Content-Type":"application/json"},
body:JSON.stringify(contact),
})

console.log(response);

if(response.ok){
  toast.success("message sent Succesfull")

  const res_data= await response.json();

  // console.log("message",res_data);



setContact({
 ...contact,
  message: "",
});




}
else{

  setContact({
    username: "",
    email: "",
    message: "",
   });
}



} catch(error){
  toast.error("message not send");
  // console.log("error in posting contact");
}



    // console.log(contact);
  };



  // getting user data 
const{user}=useAuth();

if(userdata && user){
  // console.log(user.userData);
// login krne k bad direct fill ho jaye
  setContact({
username:user.userData.username,
email:user.userData.email,
message:"",
  })

// value update ho chuki hai
setUserdata(false);


}


  return (
    <>
      <section className="section-contact">
        <div className="contact-content container">
          <h1 className="main-heading">contact us</h1>
        </div>
        {/* contact page main  */}
        <div className="container grid grid-two-cols">
        

          {/* contact form content actual  */}
          <section className="section-form">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username">username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="off"
                  value={contact.username}
                  onChange={handleInput}
                  required
                />
              </div>

              <div>
                <label htmlFor="email">email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  value={contact.email}
                  onChange={handleInput}
                  required
                />
              </div>

              <div className="message">
                <label htmlFor="message">message</label>
                <textarea
                  name="message"
                  id="message"
                  autoComplete="off"
                  value={contact.message}
                  onChange={handleInput}
                  required
                  cols="30"
                  rows="6"
                ></textarea>
              </div>

              <div>
                <button type="submit">submit</button>
              </div>
            </form>
          </section>
        </div>

        <section className="mb-3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2613173278896!2d73.91411937501422!3d18.562253982539413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sPhoenix%20Marketcity%20Pune!5e0!3m2!1sen!2sin!4v1697604225432!5m2!1sen!2sin"
            width="100%"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </section>
    </>
  );
};



export default Contact