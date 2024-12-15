const express =  require('express');
const app = express();

app.use("/", (req,res) => {
    res.send("Project is Started");
});

app.listen (777, () => {
    console.log("Server is running on port 777");
});