//importando 
const express = require('express')
const server = express()

const {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
} = require('./pages')

//configurar nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views',{
    express: server,
    noCache:true
})
//receber os dados do bory
server.use(express.urlencoded({extended: true}))
//configurar arquivos estaticos(CSS,Scripts, imagens)
server.use(express.static("public"))
//configuração das rotas
server.get("/", pageLanding)
server.get("/study", pageStudy)
server.get("/give-classes",pageGiveClasses)
server.post("/save-classes", saveClasses)
server.listen(5500)