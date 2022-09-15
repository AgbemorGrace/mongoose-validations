const jwt = require("jsonwebtoken")

exports.authRequired = (req,res,next) => {
  const authorization = req.headers.authorization;

  if(!authorization){
    return res.status(401).json({error: "Please login"})
  }
  //const token = authorization.split(" Bearer")[0];
  const token = authorization.split(" ")[1];
  if(!token){
    return res.status(402).json({error: "Please login"})
  }

  const user = jwt.verify(token, "b26465c7f3ec33e6502103584926454f585cd9df26ab6d915242082b66f4e569"
  );
  req.user =user;
    next();
}