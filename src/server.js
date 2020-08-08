//Servidor
const express = require("express")
const server = express()

const {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
} = require("./pages")

//configurar nunjucks (template engine)
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true,

})

//configurar arquivos estaticos (css, scripts, imagens)
server
//escondendo o codigo da barra de busca
.use(express.urlencoded({ extended: true }))
.use(express.static("public"))
//rotas da aplicaçãp
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
//start do servidor
.listen(5500)
