const express = require('express');
const Name = require('../model/Name')
const Router = express.Router();


Router.get("/name", (req, res) =>
{
    Name.find({})
    .exec((err,data)=>
    {
        if(err){
            res.send("erroe geting name")
        }
        else{
            res.json(data)
        }
    })
})


Router.post("/new", (req, res, next) =>
{
    const newName  = new Name({
        name: req.body.name
    })

    newName.save().then(namea => res.json(namea)).catch(next)
})

Router.delete("/delete/:id", (req, res, next) =>
{
    Name.findByIdAndRemove({_id: req.params.id})
    .then(doc => {
res.send(doc)
    })
})

Router.put("/update/:id", (req, res)=>
{
    Name.findByIdAndUpdate({_id: req.params.id}, {$set: {name: req.body.newname}}, {new: true})
    .then(d => 
        {console.log("updated" + d)
            res.json(d)
    }
        )
    .catch(err => console.log("not updated" + err))
})

module.exports  = Router