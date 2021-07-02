const express = require("express");
const app = express();
const http = require("http").Server(app);
require('dotenv').config();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;
app.use(
    express.urlencoded({
      limit: "15360mb",
      extended: true,
      // type: "application/json",
      parameterLimit: 5000000,
    })
  );
app.use(express.json());
const userRoute = require("./route/user.route");
app.use("/user", userRoute);

app.get('/', (req,res)=>{
    res.send("api ok ")
})
http.listen(8000, () =>{
    console.log(`App is running ${PORT}`);
});
