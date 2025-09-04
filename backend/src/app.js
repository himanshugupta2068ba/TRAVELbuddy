import express from "express";
const app = express();
app.set("port",(process.env.port || 8000));


app.listen(app.get("port"),()=>{
    console.log(`Server started on port ${app.get("port")}`);
});