# 👵 HealthTech - Cuidadoras de Idosos

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

O **HealthTech** é um ecossistema focado em facilitar o dia a dia de cuidadores autônomos. Esta etapa do projeto foca no **Back-end**, permitindo o registro, armazenamento e consulta de dados clínicos de idosos em um banco de dados relacional.

---

## 🚀 O que o projeto faz?

Atualmente, a API (Interface de Programação) é capaz de:
- [x] **Persistência de Dados**: Cria automaticamente um banco de dados local (`database.db`).
- [x] **Listagem (Read)**: Retorna todos os pacientes cadastrados via rota `/pessoa`.
- [x] **Cadastro (Create)**: Recebe novos idosos e salva no banco de dados.
- [ ] **Atualização (Update)**: Alterar estado de saúde em tempo real (Próxima Sprint).
- [ ] **Remoção (Delete)**: Excluir registros do sistema (Próxima Sprint).

---

## 🛠️ Tecnologias Utilizadas

- **Node.js**: Motor principal do projeto.
- **Express**: Gerenciamento de rotas e requisições HTTP.
- **SQLite3 & SQLite**: Banco de dados leve e eficiente.
- **Axios**: Preparado para integração com o Front-end.

---

## 🏁 Como Rodar na sua Máquina

### 1. Clonar e Instalar
```bash
git clone https://github.com/Luccasales/HealthTech-Cuidadores_de_Idosos-.git
cd HealthTech-Cuidadores_de_Idosos-
npm install
node server.js
```
O servidor estará rodando em: http://localhost:3000

Exemplo de Objeto JSON(Idoso cadastrado)
```json
{
  "nome_idoso": "Vania",
  "idade": "72",
  "problema": "Fraqueza nas pernas",
  "estado_saude": "Bom",
  "autonomia": "Precisa de ajuda",
  "evolucao": "Melhorando",
  "data": "23/03/2026"
}
```
Desenvolvido por Lucca Sales.
