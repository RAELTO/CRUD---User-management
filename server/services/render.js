//this file is going to allow us to render different files using router
//by doing this we replace the callback functions in router.js by calling this exported CB functions instead

const axios = require('axios');//import axios - allow us to make requests

exports.homeRoutes = (req, res) => {
    //Make a get request to /api/users
    axios.get('http://localhost:3000/api/users')
        .then(function(response) {
            console.log(response.data);
            res.render('index', {users: response.data});
        })
        .catch(e => {
            res.send(e);
        })
}

exports.add_user = (req, res) => {
    res.render('add_user');
}

exports.update_user = (req, res) => {
    axios.get('http://localhost:3000/api/users', {params: {id: req.query.id}}) //to get a specific user from the DB
        .then(function (userdata) {
            res.render("update_user", {user: userdata.data})
        })
        .catch(e => {
            res.send(e);
        })
}