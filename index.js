let express =require("express");
let app =express();

app.get("/",()=>{
    console.log("data fetched");
})
app.listen(3000,()=>console.log("server is running on 3000"));
