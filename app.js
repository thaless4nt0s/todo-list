const express = require('express')
const path = require('path')

const checklistRouter = require("./src/routes/checklist")
const rootRouter = require("./src/routes/index")
require("./config/database")

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))//pega os valores do form e deixa disponivel

app.use(express.static(path.join(__dirname, 'public'))) //Os arquivos estáticos ficarao na pasta 'public'

app.set("views", path.join(__dirname,'src/views'))//Diretório onde serão armazenados as views
app.set("view engine", 'ejs')//qual tipo de arquivo as views terao

app.use('/', rootRouter)
app.use('/checklists',checklistRouter)

app.listen(3000, () => {
    console.log("Servidor iniciado com sucesso !!")
})