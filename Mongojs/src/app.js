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
           Mobile: 8485041031,
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
        //const result=await Member.find({Age:{$gt:25}}/*This is Comparison Operator $gt,$gte, $eq,$neq, ETC*/, {_id : 0,Name:1});
        //const result = await Member.find(  {$nor:[{Age:25},{City:"Sangola"}]  }, {_id:0, Name:1}); // Here $and is used. Logical Operator.
        
        const result = await Member.find()
        .select({_id:0, Name:1,Mobile:1})
        .sort({Mobile:1}); // CountDocuments and Sort function used.
        
        console.log(result);

    }catch(err){ console.log(err.massage);}
}
//readData();

const UpdateDocument= async(_id)=>
{
    try {
        
        const uData = await Member.findByIdAndUpdate({_id},{
            $set: {
                Mobile:9503490157
            }
        }, {new:true});

        console.log(uData);

    } catch (err) {
        console.log(err.massage);
    }
    
}

//UpdateDocument("655f6cb41d1be7d7938461a9");


const DeleteDoc = async({id})=>
{
    try {
        const data = await Member.deleteOne(({id}));
        console.log(data);
        
    } catch (err) {

        console.log(err.massage);
        
    }

}

DeleteDoc("655f6d49a6cde0166babe591");