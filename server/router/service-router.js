// jha pe se dat extract krnge
const express=require("express");
const router=express.Router();
const services=require("../controllers/service-controller");


// data extract krna hai
// services funcn to get data
router.route('/service').get(services);
// iss route ko alg se server.js pe define krna hoga bki ki trh





module.exports=router;


