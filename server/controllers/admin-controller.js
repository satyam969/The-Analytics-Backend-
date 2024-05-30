
// model se hm direct data le skte hai
const User=require("../models/user-module")
const Contact=require("../models/contact-module")
// ye sari dats hm sirf admin ko hi dikhana chahenge so 
// we need to set the authentication




const getAllUsers=async(req,res)=>{

try{
// sare users aa jayenge isse
// password chor ke sara dat aajyega
    const users=await User.find({},{password:0});
console.log(users);
    if(!users || users.length===0){

        // users mil bhi gye aur no 0 hai ya user nhi mila 

       return res.status(404).json({message:"Users not found"})


    }
    
   return res.status(200).json(users);

}catch(error){
    next(error)
}




    
}




const getAllContacts=async(req,res)=>{

    try{
    // sare users aa jayenge isse
        const contacts=await Contact.find();
    console.log(contacts);
        if(!contacts || contacts.length===0){
    
            // users mil bhi gye aur no 0 hai ya user nhi mila 
    
           return res.status(404).json({message:"Contacts not found"})
    
    
        }
        
       return res.status(200).json(contacts);
    
    }catch(error){
        next(error)
    }
    
    
    
    
        
    }
    



// for deleting users

const deleteUserByID=async(req,res)=>{



try {

// url me id hai use find kro
// : ke bad wala dat params hota hai
const id =req.params.id;

// atlas pe _id h isliye 
await User.deleteOne({_id:id});




return res.status({message:"User Deleted Succesfully"})

    
} catch (error) {
    
next(error);
// console.error("Not working delete");

}







}


// for single user 


const getUserById=async(req,res)=>{



    try {
    
    // url me id hai use find kro
    // : ke bad wala dat params hota hai
    const id =req.params.id;
    
    // atlas pe _id h isliye 
    const SingleUserData=await User.findOne({_id:id},{password:0});
    
    
    // console.log(SingleUserData);
    
    return res.status(200).json(SingleUserData);
    
        
    } catch (error) {
        
    next(error);
    // console.error("Not working delete");
    
    }
    
    
    
    
    
    
    
    }



// for updating user
const updateUserById=async(req,res)=>{

try {
    
    const id =req.params.id;

    // req.body se sara data mil jata hai

    const updatedData=req.body;
    
    // atlas pe _id h isliye 
    // joi update ho rha bhjo 2nd input me
    const updateUser=await User.updateOne({_id:id},{$set:updatedData});

return res.status(200).json(updateUser);

} catch (error) {
    next(error);
}




}




const deleteContactById=async(req,res)=>{



    try {
    
    // url me id hai use find kro
    // : ke bad wala dat params hota hai
    const id =req.params.id;
    
    // atlas pe _id h isliye 
    await Contact.deleteOne({_id:id});
    
    
    
    
    return res.status({message:"contact Deleted Succesfully"})
    
        
    } catch (error) {
        
    next(error);
    // console.error("Not working delete");
    
    }
    
    
    
    
    
    
    
    }
    





module.exports = {getAllUsers,getAllContacts,deleteUserByID,getUserById,updateUserById,deleteContactById};