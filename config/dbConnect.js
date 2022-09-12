const { connect } = require("mongoose")

const dbConnect =async() => {
    try {
        await connect("mongodb://localhost:27017", {
            dbName:"shop",
        });
        console.log("Database cennected successfully")
    }catch(error){
        console.log(error);
            process.exit(1);
        
    }
}
module.exports ={dbConnect};