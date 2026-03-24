const sqlite3 = require('sqlite3')
const {open} = require('sqlite')

const criarBanco = async() => {

    const db = await open({
        filename: './database.db',
        driver: sqlite3.Database
    })

    await db.exec(`
        CREATE TABLE IF NOT EXISTS pessoa(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome_idoso TEXT,
            idade TEXT,
            problema TEXT,
            estado_saude TEXT,
            autonomia TEXT,
            evolucao TEXT,
            data TEXT
        )
        `)

        console.log('A tabale foi criada com sucesso!')

    //CREATE
    const checagem = await db.get(`SELECT COUNT (*) AS total FROM pessoa`)

    if(checagem.total === 0){
        await db.exec(`
            INSERT INTO pessoa (nome_idoso, idade, problema, estado_saude, autonomia, evolucao, data) VALUES
            ('Vania', '72', 'fraquezas nas pernas', 'Bom', 'precisa de ajudante', 'Está melhorando', '23/03/2026'),
            ('Lurdes', '75', 'dor nas costas', 'Bom', 'Consegue se mexer', 'Estavel', '24/03/2026')
        `)
    } else {
        console.log(`Banco de dados concluido com ${checagem.total} de pacientes`);
    }

    //==============================
    //select - R do CRUD - READ
    const todasPessoas = await db.all('SELECT * FROM pessoa')
    console.table(todasPessoas)

    return db;
}

module.exports = {criarBanco}