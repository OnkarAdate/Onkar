const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Family").then(() => console.log("Connection Done..")).catch((err)=> console.log(err));


//Schema Creation.

const fshema = new mongoose.Schema(
    {
        name : { type: String,required :true},
         city : String,
         Age : Number,
         date : { type : Date, default: Date.now},
         Mob : Number
    }
    )

// Collation creating

const Fdata = new mongoose.model("Myfami", fshema);

