var express = require("express");

var app = express();

app.use(express.json());

const PORT = 3000;

var usersTab = [];
app.post("/addUser", function(req, res) {
  console.log(req.body.username);
  console.log("funkcja POST Z serwera");
  var userFound = false;
  usersTab.forEach(element => {
    if (req.body.username == element.username) {
      console.log(req.body + " " + element);
      console.log("użytkownik istnieje");
      res.send({
        response: "user Exists"
      });
      userFound = true;
      return;
    }
  });
  if (!userFound) {
    usersTab.push(req.body);
    res.send({
      response: "login",
      usersTab: { usersTab }
    });
  }
  console.log(usersTab);
  //res.send(req.body);
});

app.post("/deleteUser", function(req, res) {
  usersTab.splice(req.body.index, 1);
  res.send({
    response: "deleted",
    usersTab: { usersTab }
  });
});

app.listen(PORT, function() {
  console.log("start serwera na porcie " + PORT);
});
