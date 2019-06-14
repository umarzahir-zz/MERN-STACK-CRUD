const mongoose = require('mongoose');
const schema = mongoose.Schema;

const NameSchema = new schema({
    name:{
        type: String,
        required: [true,'name is required']
    }
})

module.exports  = mongoose.model("Name", NameSchema)
