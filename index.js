const express = require("express");
const postRouter= require("./modules/post/post.route");
const {dbConnect}= require("./config/dbConnect")
const {authRouter} = require("./modules/users/auth.route");

const app = express();

app.use(express.json());

app.all("/",(req, res) =>{
    res.status(200).send("Welcome to my server. use /posts to get all ")
});
app.use("/auth", authRouter);
app.use ("/posts", postRouter);

const start =async () => {
        await dbConnect ();
    


app.listen(4001,(err) => {
    console.log("server is listening on port 4001")
})
}
start();