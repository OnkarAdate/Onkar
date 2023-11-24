const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/House")
.then(() => console.log("Connection Done.."))
.catch((err)=> console.log(err));


 //Schema Creation.
const houseShema = new mongoose.Schema(
     {
         name : { type: String,required :true},
          city : String,
          Age : Number,
          date : { type : Date, default: Date.now},
          Mob : Number
     }
     )

 // Collation creating

 const Fdata = new mongoose.model("Myhouse", houseShema);

 const createDocument = async() => {

     try{

         const onkardata = new Fdata({

             name : "akash Adate",
           City : "Sangola",
             Age :25,
             Mob : 9503448033
         })
        
 const result = await onkardata.save();
 console.log(result);
     }catch(err){
     console.log(err);
     }
 }

 createDocument();

