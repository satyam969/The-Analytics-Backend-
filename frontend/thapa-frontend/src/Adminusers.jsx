import { useEffect, useState } from "react"
import { useAuth } from "./store/auth";
import {Link} from 'react-router-dom';

const AdminUsers=()=>{

    const [datas,setData]=useState([]);

    const {authorizationToken,API} =useAuth();

    const getAllUsersData=async()=>{

        try{

            const response=await fetch(`${API}/api/admin/users`,{
                method:"GET",
                headers:{Authorization:authorizationToken},
            }
            
            
            );

            const data=await response.json();

            // console.log(`user ${data}`)
            if(response.ok){

setData(data);

            }




        }catch(error){
            console.log(error);
        }
    }



    

const deleteUser=async(id)=>{

    try {
        const response =await fetch(`${API}/api/admin/users/delete/${id}`,{
            method:"DELETE",
            headers:{Authorization:authorizationToken,},
        })
        // delete handle krne k liye admin route me fncn bnao
        
        if(response.ok){
          
        // updating data
        getAllUsersData();
 
        }
        } catch (error) {
        
       console.log(error);

        }
    
                
    } 



// getting users data
useEffect(()=>{

getAllUsersData();

},[])






    // nested routeb create kr kr outlet from react router dom ki jrurat hoti
    //  h nhi toh componente nhi dikhta hai html tag ..

    if(datas==[]){
        return<>
        
        <h1>Loading Resource</h1>
        <h2>Please wait</h2>
        
        </>
    }


    if(datas){

        return<>

{datas.map((dat,index)=>(


<div className="container" key={index}>

<div className="userid">{dat.username}</div>

<div className="email">{dat.email}</div>


<Link to={`/admin/users/${dat._id}/edit`}>Edit</Link>


<button onClick={()=> deleteUser(dat._id)}>Delete</button>

</div>





)





)}

</>


    }



}

export default AdminUsers