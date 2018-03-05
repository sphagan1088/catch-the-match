const express = require("express");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3001;
const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('./app_client/build'));


app.listen(PORT, () => {
    console.log(`Listening on Port: ${PORT}`);
});