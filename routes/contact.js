const express=require("express")
const router=express.Router()
const Contact=require("../models/Contact")


//test
/*
router.get("/",(req,res)=>{
    res.send("test")
})*/

router.post("/add",async(req,res)=>{
const {name,email,phone}=req.body;
try{
const newContact=new Contact({
    name,
    email,
    phone,

})
console.log(newContact,"testttt")
const contact=await newContact.save()
res.send({msg:"contact added"})
}
catch(error){
    console.log(error)
}

})

//get all contacts
router.get("/",async(req,res)=>{
    try{
        const contacts=await Contact.find();
        res.send({msg:"data fetched",contacts})
    }
    catch(error){
        console.log(error)
    }
})

//DElete
router.delete("/delete/:id",async(req,res)=>{
    const {id}=req.params
    try{
        const contact=await Contact.findOneAndDelete({_id:id})
        res.send({msg:"contact deleted",contact})
    }
    catch(error){
        console.log(error)
    }

})

//edit 
router.put("/edit/:_id",async(req,res)=>{
    const {_id}=req.params
    try{
        const contact=await Contact.findByIdAndUpdate({_id},{$set:req.body})
   res.send({msg:"contact edited",contact})
    }
    catch(error){
        console.log(error)

    }
})



module.exports=router