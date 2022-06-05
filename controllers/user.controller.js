
var db = require('../db')
const shortid = require('shortid');

module.exports.users =  (req, res) => {
    res.render('users/index', {
      users: db.get('users').value()
    })
}

module.exports.search =  (req, res)=>{
    var name = req.query.name;
    var users = db.get('users').value()
    var matchedUsers = users.filter(function(user){
      return user.name.toLowerCase().indexOf(name.toLowerCase()) !== -1;
    });
  
    res.render('users/index', {
      users: matchedUsers
    });
    
}

module.exports.create = (req, res)=>{
    res.render('users/create');
}

module.exports.getUserById = (req, res)=>{
    var id = req.params.id
    var user = db.get('users').find({id : id}).value();
    res.render('users/view', {
      user: user
    })
}

module.exports.createUser = (req, res)=>{
    var name = req.body.name;
    var id = shortid.generate()
    db.get('users')
      .push({ id: id, name: name})
      .write()

    res.redirect('/users')
}