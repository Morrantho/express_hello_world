let express = require("express");
let app     = express();
const PORT  = 8000;

app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views'); 
app.set('view engine','ejs');

app.get("/",function(req,res){

    res.render("root");
})


app.listen(PORT, function(){
    console.log("SERVER RUNNING ON PORT: "+PORT);
})