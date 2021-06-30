const mongoose = require("mongosse")

const taskSchema = mongoose.taskSchema({
    name: {type: String, required: true},
    done:{type: Boolean, default: false}
})

module.exports = mongoose.model("Task", taskSchema)

