const Todo = require('./todo');

Todo.methods(['get','post','put','delete']);

//explicacao em  Section 4/35 -> 4:00min
Todo.updateOptions({new: true, runValidators: true});


module.exports = Todo;