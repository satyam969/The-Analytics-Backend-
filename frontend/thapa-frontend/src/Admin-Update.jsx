import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "./store/auth";
import { toast } from "react-toastify";



const AdminUpdate=()=>{

const[data,Setdata]=useState({
    username:"",
    email:"",
    phone:""
})

const handleInput=(e)=>{

const name=e.target.name;
const value=e.target.value;

Setdata({
    ...data,
   [name]:value,
})

}

const{authorizationToken,API}=useAuth();

const params=useParams();
// params url ke parameter ko lane ke kam aata hai (:id)
// iss funcn me hm khudse id nhi pass kr rhe so params se 
const getSingleUserData=async()=>{

    
    try {
        const response =await fetch(`${API}/api/admin/users/${params.id}`,{
            method:"GET",
            headers:{Authorization:authorizationToken,},
        })
        // delete handle krne k liye admin route me fncn bnao
        
        if(response.ok){
            // console.log("User Data got");
           
      

        

        const data=await response.json();

        // updating data
        // getAllUsersData();
Setdata(data);
        // console.log(`users single data :-${data}`);
        
        }
        } catch (error) {
        
       console.log(error);

        }
    


}

useEffect(()=>{
    getSingleUserData();
},[]);




// updating user dynamically

const handleSubmit=async(e)=>{
e.preventDefault();

try {
    // headers pe ye bhi btana hoga ki file share kr rhe jiska Content-Type :application/json()
    // kyuki bhj(post) kr rhe hai na data 
const response = await fetch(`${API}/api/admin/users/update/${params.id}`,{
    method:"PATCH",
    headers:{
        "Content-Type":"application/json",
        Authorization:authorizationToken},
    body:JSON.stringify(data),
})

if(response.ok){

    // ye likhne ki jrurat nhi h page refresh hone h 

toast.success("User Updated Successfully");


}
else{
    toast.error("Not Updated");
}

} catch (error) {
    console.log(error);
}

}








return(<>
      <section className="section-contact">
        <div className="contact-content container">
          <h1 className="main-heading">Update User</h1>
        </div>
        {/* contact page main  */}
        <div className="container grid grid-two-cols">
        

          {/* data form content actual  */}
          <section className="section-form">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username">username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="off"
                  value={data.username}
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
                  value={data.email}
                  onChange={handleInput}
                  required
                />
              </div>

              <div >
                <label htmlFor="phone">phone</label>
                <input
                  type="phone"
                  name="phone"
                  id="phone"
                  autoComplete="off"
                  value={data.phone}
                  onChange={handleInput}
                  required
                />
              </div>

              <div>
                <button type="submit">submit</button>
              </div>
            </form>
          </section>
        </div>

      
      </section>
   
    
    </>
    
)





}
export default AdminUpdate;