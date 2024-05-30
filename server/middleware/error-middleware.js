// alg alg jagah pe alg alg error aa rhew hai 
// pr hme front end pe bhi toh dikhana hai toh esse acha hm ek hi jahgah se sarra error 
// handle krne ka kosis krenge

// for that we need error middleware 
// next() call krna hi pdega 
// next(error)likhne se wo direct client ko messgae na bhjte hue hmare error middle ware pe aayega jha se client ko message jyega
// har jagah ab res.status(400).json({message}) ki jagah next(error)


const errorMiddleware=(err,req,res,next)=>{

    const status =err.status || 500;

    const message=err.message|| "BACKEND ERROR";

    const extraDetails=err.extraDetails||"Error from Backend";

 return res.status(status).json({message,extraDetails});

}




module.exports=errorMiddleware;



