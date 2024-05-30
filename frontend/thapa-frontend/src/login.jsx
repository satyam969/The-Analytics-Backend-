import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./store/auth";
import {toast} from "react-toastify"
// react-toastify se hi krna react-toastify/dist/component se nhi


const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();




  const {storetokenInLS,API} = useAuth();






  // let handle the input field value
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };


 
  const handleSubmit=async(e)=>{

    // to prevent the page from reloading
    
    e.preventDefault();
    // console.log(user);
    try{
        const response =await fetch(`${API}/api/auth/login`,{
            method:'POST',
            headers:{"Content-Type":"application/json"},
body:JSON.stringify(user),
        })


// console.log(response);
const res_data= await response.json();

console.log(res_data);

if(response.ok){
    toast.success("Log In Succesfull")

  

    storetokenInLS(res_data.token);


    setUser({ email: "",
    password: "",});

    navigate("/")

}
else{
    setUser({ email: "",
    password: "",});
  
      // kuch galat trike se bhra hai agr form toh error dikhana hai
    // error middle warese ZOD wle error ko get krna hoga 
    // alert(res_data.message?res_data.message:res_data.extraDetails);
  //  toast use kr lo alert ki jgh
  toast.error(res_data.message?res_data.message:res_data.extraDetails);
  // inka apna khud ka css hota hai tbhi wo red,green,..notification ki trh dikega 
}


    } catch(error){
        
        console.log(" Log in data sending error",error)


    }

    
    
    }


  return (
    <>
      <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              
              {/* our main registration code  */}
              <div className="registration-form">
                <h1 className="main-heading mb-3">Login form</h1>
                <br />
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="email">email</label>
                    <input
                      type="text"
                      name="email"
                      value={user.email}
                      onChange={handleInput}
                      placeholder="email"
                    />
                  </div>

                  <div>
                    <label htmlFor="password">password</label>
                    <input
                      type="password"
                      name="password"
                      value={user.password}
                      onChange={handleInput}
                      placeholder="password"
                    />
                  </div>
                  <br />
                  <button type="submit" className="btn btn-submit">
                    Log In
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Login