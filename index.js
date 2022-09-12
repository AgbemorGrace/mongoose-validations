const express = require("express");
const postRouter= require("./modules/post/post.route");
const {dbConnect}= require("./config/dbConnect")

const app = express();

app.use(express.json());

app. all("/",(req, res) =>{
    res.status(200).send("Welcome to my server. use /posts to get all ")
});
app.use ("/posts", postRouter);

const start =async () => {
        await dbConnect ();
    


app.listen(4001,(error) => {
    console.log("server in listening on port 4001")
})
}
start();