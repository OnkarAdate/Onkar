const mongoose = require("mongoose");

// connecting with Mongo
mongoose.connect("mongodb://127.0.0.1:27017/House")
.then(()=> console.log("Connection Done...."))
.catch((err)=> console.log(err));


//Defining Schema
const familySchema= new mongoose.Schema({

    Name :{ type: String,required :true},
    Age:Number,
    Mobile: Number,
    City: String
})

//Creating collection / model
const Member = new mongoose.model("Member", familySchema);


//inserting data by using Async()
const createMemberData = async( ) => {  

    try{

        const memberInfo1 = new Member(
            {
            Name : "Sujata Adate",
            Age : 35,
           Mobile: 9503448033,
           City : "Sangola"
        })

        const memberInfo2 = new Member(
            {
            Name : "Kajal Adate",
            Age : 25,
           Mobile: 9503448033,
           City : "Sangola"
        })


        
        const memberData = await Member.insertMany([memberInfo1,memberInfo2])
        console.log(memberData);
    

    }catch(error){ console.log(error.massage);}
  
}

//calling function
//createMemberData(); // This is Commented due to if we run Read op. then it may create duplicate data


// read Data.
const readData = async()=>
{
    try{
        const result=await Member.find({Age:35});
        console.log(result);

    }catch(err){ console.log(err.massage);}
}
readData();