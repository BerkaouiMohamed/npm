let Validator = require('validatorjs');
let data = {
    name: 'John',
    email: 'johndoeil.com',
    age: 28
  };
  
  let rules = {
    name: 'required',
    email: 'required|email',
    age: 'min:18'
  };

  let validation = new Validator(data, rules);

console.log(  validation.passes())