const express = require("express")
const path = require("path")
const app = express();
const expressEdge = require("express-edge")
var mongoose = require("mongoose")
const Post = require("./models/Post")
const fileUpload = require("express-fileupload")


app.use(fileUpload())
app.use(express.static("public"))
app.use(expressEdge.engine)
app.set("views", `${__dirname}/views`)



mongoose.connect('mongodb+srv://abbos:seZ1KCxnvy4kScf4@cluster2.sb5woop.mongodb.net/?retryWrites=true&w=majority')
.then(db =>{
    console.log("Database Connected");
})
.catch(err => console.log(err));



app.use(express.static("public"))
app.use(expressEdge.engine)
app.set("views", `${__dirname}/views`)
app.use(express.json())
app.use(express.urlencoded({extended:true}))



app.get("/", async(req,res)=>{
    const posts  = await Post.find()
    res.render("index", {posts:posts})
})

app.get("/about", (req,res)=>{
    res.render("about")
})


app.get("/contact", (req,res)=>{
    res.render("contact")
})
app.post("/post/create", (req, res) => {
    const {image}= req.files
    image.mv(path.resolve(__dirname,"public/posts", image.name ),(err)=>{
        if(err){
            console.log(err);
        }
        Post.create(({...req.body, image:`/posts/${image.name}`}))
        res.redirect("/")
    })
})
app.listen(5000, () => {
    console.log("server is running 5000 port http://localhost:5000");
})


