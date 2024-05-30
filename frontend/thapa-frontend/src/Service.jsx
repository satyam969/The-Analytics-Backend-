
import { useEffect } from "react";
import { useAuth } from "./store/auth";
// import './service.css'

// kbhi state variable k andr dat mt len afetch kr kr;


const Service=  ()=>{

    
   
        const {data}=useAuth();
  
// console.log(data);
// data=data.data;
// const datas=data;
// data update hone ke bad return hona chhiye 
if(data){

    return(<>
        <h1>The Services You Will Get At Us Are:-</h1>
        {/* the data.data here an array so should be passed as an array */}
        <div className="Sgrid">
        {data.map((dat)=>(
        
        <div className="serv" key={dat._id}>
        
        
        <div className="service">{dat.service}</div>
        <div className="description">{dat.description}</div>
        <div className="price">{dat.price}</div>
        <div className="provider">{dat.provider}</div>
        
        </div>
        
        
        ))}
        </div>
        
        
        
        
        
        {/* ) */}
        
        
        
        
        
        
        
        {/* ) */}
        
        
        
        
        {/* } */}
        
                </>)
        

}
   


}


export default Service