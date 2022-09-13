const{ Schema, model, trusted} = require("mongoose");

const userSchema = new Schema({

firstName:{
    type: String,
    required: true,
},
lastName:{
    type:String,
    required:true,
},
email:{
    type:String,
    required:true,
    lowercase:true,
    unique:true,
},
password:{
    type:String,
    required:true,
    minLength:[6,"password is too short."]

}},
{
    timestamps: true,
}
)
module.exports = model ("user", userSchema);