var express = require('express');
    require("./conn");
const Employ = require("./employ");
var router = express.Router();



router.post('/fetchapi', function(req, res, next) {
  console.log(req.body);
  const user = new Employ(req.body)
  user.save().then(() => {
     res.send(user);
  }).catch((e) => {
    res.send(e);
  })
});



router.get('/fetchapi', async(req, res) => {
     try{
      const employeeData = await Employ.find();
      res.send(employeeData);
     }catch(e){
       res.send(e);

     }

  res.send(" Hello! World");
});

  
  module.exports = router;
  