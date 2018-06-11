const express = require('express');

var app = express();
app.get('/', (req,res) =>{
  res.status(404).send({
    error:'page not found.',
    name: 'Todo app v1.0'
  });
});

app.get('/user', (req,res) =>{
  res.send([{
    name: 'Andrew',
    age: 25
  },{
    name: 'Scott',
    age:28
  },
  {
    name: 'Johny',
    age:30
  }]);
});
app.listen(3000);

module.exports.app = app;
