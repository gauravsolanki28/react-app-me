const express = require('express')
const router = express.Router()
const Users = require('../models/users');
router.post("/", (req, res) => {
    const users = new Users({
        fname:req.body.fname,
        lname:req.body.lname,
        email:req.body.email,
        password:req.body.password,
    })
    users.save((err,data)=>{
        console.log(err);
        if(err){
            if(err.name === 'ValidationError'){
                return res.send({
                    required:true
                })
            }
            else{
                if(err.errors.email.kind === 'unique'){
                    return res.send({
                        emailExist:true
                    })
                }
            }

        }
        else{
            res.status(201).json({
                createdUser:users
            })
        }
    })
})

router.get("/", (req, res) => {
    Users.find()
    .then( docs => {
        res.send(docs)
    })
})


module.exports = router;
