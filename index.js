
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

// const express = require("express");
// const app = express();

app.get("/", function (req, res) {
  res.send("WORKING!!!");
});

app.listen(process.env.PORT || 8000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });
//  app.listen(process.env.PORT || 8000);


// const express = require("express");
// const app = express();
// const bodyParser = require("body-parser");
// const cors = require("cors");

// app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded());

// //create a server object:
// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/view/hello.html");
// });

// app.use(express.static("src/view/"));

// app.listen(8080, function() {
//   console.log("server running on 8080");
// }); //the server object listens on port 8080

// module.exports = app;
