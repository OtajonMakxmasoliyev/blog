const mongoose = require("mongoose")
const Post = require("./models/Post")




mongoose.connect('mongodb://127.0.0.1/admin')
.then(db =>{
    console.log(db);
})
.catch(err => console.log(err));




Post.create({
    title:"Makxmasoliyev Otajon",
    description:"Hello MongoDB",
    content:"locndjc  chdcbjn nnxcjsdcbhdvcba  bxchdvchdbcdn nc bsdv"
})