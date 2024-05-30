const adminMiddleware=async(req,res,next)=>{

try{

    // userAuthentication ke time req.user me hm user
    //  ka data add kr diye the toh ab usme se check krnge 
    // console.log(req.user);

    const adminRole =req.user.isAdmin;

  if(!adminRole){
    return res.status(403).json({error:"Acess denied . User is not an admin"});
  }
  

  next();

}catch(error){

next(error);

}








}



module.exports=adminMiddleware