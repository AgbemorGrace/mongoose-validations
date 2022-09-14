const User = require("./user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const generateToken = (user) => {
    //generate token
    const token = jwt.sign({id: user._id, email: user.email}, 
        "b26465c7f3ec33e6502103584926454f585cd9df26ab6d915242082b66f4e569",
        {
            expiresIn: "1h",
        }
        );

        return {
            token,
            user,
        }

}

exports.register = async (req, res) => {
    const{email, password} = req.body;

    //checking to see if email already exists
    const emailExists = await User.findOne({email});
    if (emailExists) {
        return res.status(400).json({error: "Email already in use"});
    }

    const hashPassword = await bcrypt.hash(password, 12);

    const user = await User.create({...req.body, password:hashPassword});
    
//generate token
const token = generateToken(user);

    res.status(201).json({token});
}

exports.login = async(req, res) => {
    const {email, password} = req.body;

    let user =  await User.findOne({email});
    if (!user){
        return res.status(400).json({msg: "Invalid credentials"})
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch){
        return res.status(400).json({msg: "Invalid credentials"});
    }
    //generate token
    const token = generateToken(user);
    
        res.status(200).json({token});
    }
    
   