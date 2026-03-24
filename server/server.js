//Quero saber como que eu faço para aprender atualizar,por exemplo, a idade de algum idoso mudou, ou o estado de saude

const express = require('express')
const {criarBanco} = require ('./database')

const app = express();

app.use(express.json())

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Servidor aberto http://localhost:${PORT}`)
})

//Rota principal
app.get('/' , (req, res) => {
   res.send( `
    <h1> Seja bem vindo a Ureni,cuidadora de idosos autonôma </h1>
    <p> Para acessar a rota de pessoas é /pessoa </p>
    `)

})

//Rota para listar todas as pessoas
app.get('/pessoa', async(req, res) => {
    const db = await criarBanco()

    const listarPessoas = await db.all(`SELECT * FROM pessoa`)

    res.json(listarPessoas)
})

//Rota para pessoa especifica
app.get('/pessoa/:id', async(req,res) => {
    const {id} = req.params
    
    const db = await criarBanco()

    const pessoaEspecifica = await db.all(`SELECT * FROM pessoa WHERE id = ?`, [id])

    res.json(pessoaEspecifica)
})


//Para registrar novas pessoas (Seria caso chegasse mais pessoas para ela cuidar)!
app.post('/pessoa' , async(req,res) => {
    const {nome_idoso, idade, problema, estado_saude, autonomia, evolucao, data} = req.body;

    const db = await criarBanco()

    await db.run(`INSERT INTO pessoa(nome_idoso, idade, problema, estado_saude, autonomia, evolucao, data) VALUES (?, ?, ?, ?, ?, ?, ?)`, [nome_idoso, idade, problema, estado_saude, autonomia, evolucao, data])
    
    res.send(`Pessoa nova registrada no sistema? ${nome_idoso} na data ${data}`)
})



