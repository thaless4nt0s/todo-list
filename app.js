const express = require('express')

const app = express()

app.get("/", (req, res) => {
    res.send("<h1>Minha lista de tarefas :) 7789 !!</h1>")
})

app.get("/json", (req,res)=>{
    res.json({title: "Tarefa X", done: true})
})

app.get("/barrichelo", (req, res)=>{
    res.status(200).json({
        name: "Rubens Barrichelo",
        nacionality: "Brazil",
        team: "Ferrari"
    })
})

app.listen(3000, () => {
    console.log("Servidor iniciado com sucesso !!")
})