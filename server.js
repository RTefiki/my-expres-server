const express = require('express')
const app = express()
const port = 3000

app.get("/", function(request, response) {
  response.send("<h1>RINOR FAMILEN HAA</h1>");

});

app.get("/contact", function(request, response) {
  response.send("Contac me at:");

});

app.get("/about ", function(request, response) {
  response.send("Une jam rinori ");

});
app.get("/me", function(req,res) {
  res.send("une jam kyijfsfsfsfsfs");
});

app.listen(3000, function () {
 console.log("Server started on port 3000")
});
