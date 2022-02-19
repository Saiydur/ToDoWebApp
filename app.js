const express = require('express');
const bodyParser = require('body-parser');

const app = express();

let items = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));

app.get("/",(req,res)=>{
    let name = "Saiydur Rahman";

    res.render("list",{ userName: name, newListItems:items});
});

app.post("/",(req,res)=>{
    let item=(req.body.todo);
    items.push(item);
    res.redirect("/");
});

app.get("*",(req,res)=>{
    res.render("Error404");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running sucessfully on PORT ${PORT}`);
});