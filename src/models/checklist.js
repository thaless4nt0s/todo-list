const mongoose = require('mongoose')

const checklistSchema = mongoose.Schema({
    name: {type: String, required: true}

})

module.exports = mongoose.model('Checklist', checklistSchema)