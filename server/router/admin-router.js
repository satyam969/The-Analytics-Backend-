const express=require("express");
const router=express.Router();
const adminController=require("../controllers/admin-controller")




// username
// "2023ugcs018"
// email
// "satyamtiwari7492@gmail.com"
// phone
// "9693240525"
// isAdmin
// true



// if isAdmin =true bhi check krna hoga authentication krne k bad
// req.user jo create kiya tha userAuthentication middle ware me
// uske use se hm user ka data pta kr skte hai
const authMidleware =require("../middleware/auth-middleware")

const adminMiddleware=require("../middleware/admin-middleware");




// to get all users in data base
// auth middle ware token milne ke bad hi km hoga 
// pehkle ligin check,then admin check then get data
router.route("/users").get(authMidleware,adminMiddleware,adminController.getAllUsers);

// getting data of a particulaar user
router.route("/users/:id").get(authMidleware,adminMiddleware,adminController.getUserById);



// route for updating data
// patch or put
router.route("/users/update/:id").patch(authMidleware,adminMiddleware,adminController.updateUserById);



// delete krne ke liye 
router.route("/users/delete/:id").delete(authMidleware,adminMiddleware,adminController.deleteUserByID);



// similarly to get all the contacts 
router.route("/contacts").get(authMidleware,adminMiddleware,adminController.getAllContacts);


// delete a contact
router.route("/contacts/delete/:id").delete(authMidleware,adminMiddleware,adminController.deleteContactById);



module.exports=router