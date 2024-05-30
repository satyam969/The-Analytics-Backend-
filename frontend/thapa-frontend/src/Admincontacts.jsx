import { useEffect, useState } from "react";
import { useAuth } from "./store/auth";
import { toast } from "react-toastify";

const AdminContacts=()=>{

    const [datas,setData]=useState([]);

    const {authorizationToken,API} =useAuth();

    const getAllContacts=async()=>{

        try{

            const response=await fetch(`${API}/api/admin/contacts`,{
                method:"GET",
                headers:{Authorization:authorizationToken},
            }
            
            
            );

            const data=await response.json();

            // console.log(`contacts ${data}`)
            if(response.ok){

setData(data);

            }




        }catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        getAllContacts();
    },[])





    
const deleteContact=async(id)=>{

    try {
        const response =await fetch(`${API}/api/admin/contacts/delete/${id}`,{
            method:"DELETE",
            headers:{Authorization:authorizationToken,},
        })
        // delete handle krne k liye admin route me fncn bnao
        
        if(response.ok){
          
            getAllContacts();
            toast.success("Successfully Deleted")
        
        }
        else{
            toast.error("Not Deleted")
        }
        } catch (error) {
        
       console.log(error);

        }
    
                
    } 





    if(datas){

        return<>
    
    {datas.map((dat)=>(

<div className="container" key={dat._id}>

<div className="username">{dat.username}</div>
<div className="email">{dat.email}</div>
<div className="message">{dat.message}</div>
<button className="btn" onClick={()=>{deleteContact(dat._id)}}>Delete</button>
</div>


    ))}
    
    </>



    }
    


}

export default AdminContacts