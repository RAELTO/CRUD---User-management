const Userdb = require('../model/user_model');

//first API new request - creat and save a new user
exports.create = (req, res) => {
    //validate request
    if (!req.body) {
        res.status(400).send({message: "Content cannot be empty!"});
        return;
    }

    //new user
    const user = new Userdb({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        role: req.body.role,
        gender: req.body.gender,
        status: req.body.status
    })

    //save user in the database
    user
    .save(user)
    .then(data => {
        //res.send(data)
        res.redirect('/');
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error ocurred while creating a create operation"
        })
    })

}

//retrieve and return all users/ retrieve and return a single user
exports.find = (req, res) => {

    if(req.query.id){
        const id = req.query.id;

        Userdb.findById(id)
            .then(data => {
                if(!data){
                    res.status(404).send({ message: `Not found user with id ${id}` })
                }else{
                    res.send(data);
                }
            })
            .catch(err => {
                res.status(500).send({ message: `Error retrieving user with id ${id}`})
            })

    }else{
        Userdb.find()
            .then(user => {
                res.send(user)
            })
            .catch(err => {
                res.status(500).send({message:err.message || "An ERROR occurred while retrieving user information"})
            })
    }
}

//Update a new identified user by user id
exports.update = (req, res) => {
    if (!req.body) {
        return res
        .status(400)
        .send({message: "Data to update cannot be empty"})
    }

    const id = req.params.id;
    Userdb.findByIdAndUpdate(id, req.body)
    .then(data => {
        if (!data) {
            res.status(404).send({message: `Cannot update user with ${id}. Maybe user not found!`})
        }else{
            res.send(data);
        }
    })
    .catch(err => {
        res.status(500).send({message: "Error Updating user information"})
    })

}

//Delete a user with specified user id
exports.delete = (req, res) => {
    const id = req.params.id;
    Userdb.findByIdAndDelete(id)
        .then(data => {
            if (!data) {
                res.status(404).send({message: `Cannot delete with id ${id}. Maybe id is wrong!`})
            }else{
                res.send({message: "User was deleted successfully!"})
            }
        })
        .catch(err => {
            res.status(500).send({message: `Could not delete user with id = ${id}`});
        });
}