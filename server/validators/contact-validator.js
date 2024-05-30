const {z}=require("zod");


// creating contact form schema


const contactschema=z.object({

    username:z
    .string({required_error:"Name is Required"})
    .trim()
    .min(3,{message:"Name must be atleast of 3 character"})
    .max(255,{message:"can not be greater than 255 characters"}),

    email:z
    .string({required_error:"Email is Required"})
    .trim()
    .email({message:"Invalid Email Adress"})
    .min(3,{message:"EmailNam must be atleast of 3 character"})
    .max(255,{message:"can not be greater than 255 characters"}),

    message:z
    .string({required_error:"message is Required"})
    .trim()
    .min(10,{message:"message must be atleast of 3 character"})
    .max(500,{message:"can not be greater than 500 characters"}),





    
})






