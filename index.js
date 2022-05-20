const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("WORKING!!!");
});

app.listen(process.env.PORT || 8000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });
//  app.listen(process.env.PORT || 8000);
