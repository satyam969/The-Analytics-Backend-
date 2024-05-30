import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./store/auth";
import {toast} from "react-toastify"


const Register=()=>{

    // make a state variable which will store the data entered by user 

    const [user,Setuser]=useState({
        username:"",email:"",phone:"",password:"",
    });




const navigate=useNavigate();







  // getting the funcn setdataInLS (usecontext api)

  const {storetokenInLS,API} = useAuth();








// on any change in filling the form the data needs to be updated so we use 

const handleInput=(e)=>{

var name =e.target.name;
var value=e.target.value;

// name : value jo hm html tag k jis hisab se name likhenge uske hisab se value set hoga 
// ... spread operator user ke difft data ko alg alg dega ex. username .....
// ye isliye use kr rhe hai tki jb hm kisi aur particular field ko upgrade kr rhe hai toh baki data change na hoye 
Setuser({
    ...user,
    [name]:value,}
)



}








const handleSubmit=async (e)=>{

// to prevent the page from reloading

e.preventDefault();
// console.log(user);

// connecting backend and front end
// http://localhost:5000/api/auth/register

// headers depict kis type ka data hai
// body me bhi depict krne hoga kis type ka data hai 
// body me json pass hoga lekin abhi state variable ek object hai so convert into json
// server 5000 port pe run kr rha hai jbki react app  pe so this gives CORS error
// CORS policy unwanted request ko block kr deta hai 
// cors policy ke according jha front end run kr rha hai whi server bhi run krna chahiye 
// so usse hme specify krnas prega ki dono ek dusre ke hi pass hai 




try{
    const response =await fetch(`${API}/api/auth/register`,{
        method:'POST',
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(user),
    })
    
// kuch galat trike se bhra hai agr form toh error dikhana hai
// error middle warese ZOD wle error ko get krna hoga 





// if registered then unfill the data in form which was input by user



const res_data=await response.json();
// console.log("response from server",res_data);



if(response.ok){
 
  // res_data me jo json token mil rha hai usse hme local storage me rkhna hai for further works
// that is to authenticate 
// local storage applications wle option me hota hai (inspect) 
// localStorage.setItem("token",res_data.token); this line of code will also store the data of token in local storage 
// but hm ekfncn bnana prefer krnge aage bhi km aayega 
storetokenInLS(res_data.token);





    Setuser( {username:"",email:"",phone:"",password:""})
    // login pe bhj dijiye
    toast.success("Registration succesfull")

    // registration succesfull hone k bad direct home pr aa jana hai
    navigate("/");
}
else{
  // kuch galat trike se bhra hai agr form toh error dikhana hai
// error middle warese ZOD wle error ko get krna hoga 
// alert(res_data.message?res_data.message:res_data.extraDetails);
// alert ki jagah isse aur ache se hm react tostify se dikha skte hai
toast.error(res_data.message?res_data.message:res_data.extraDetails);



Setuser( {username:"",email:"",phone:"",password:""})
}




}catch(error){
    console.log("register data sending error")
}





}




















    return(<>
<h1>WELCOME TO Register PAGE</h1>
{/* making a form as per the requirement */}



<form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="username">username</label>
                    <input
                      type="text"
                      name="username"
                      value={user.username}
                      onChange={handleInput}
                      placeholder="username"
                    />
                  </div>
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
                    <label htmlFor="phone">phone</label>
                    <input
                      type="number"
                      name="phone"
                      value={user.phone}
                      onChange={handleInput}
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
                    Register Now
                  </button>
                </form>






        </>)



}


export default Register