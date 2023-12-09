// const Todos = [
//     {
//         "title": "Todo1",
//         "description": "Description"
//     }, {
//         "title": "Todo2",
//         "description": "Description"
//     }, {
//         "title": "Nandu2706",
//         "description": "Description"
//     },
// ]

// exports.getAllTodos = () =>{
//     return Todos;
// }



const con = require("./db_connect");

async function createTable() {
    let sql = `
    CREATE TABLE IF NOT EXISTS todos (
      UserId INT NOT NULL ,
      TodoId INT NOT NULL AUTO_INCREMENT,
      title VARCHAR(25) NOT NULL,
      status BOOLEAN NOT NULL,
      CONSTRAINT todoPK PRIMARY KEY(TodoId));`

    await con.query(sql)
}

createTable()


async function getAllTodos() {
    let todos = await getTodos()
    //   if(!todos[0]) throw Error("Username not found!!")
    //   if(userResult[0].Password != user.password) throw Error("Password Incorrect!!")

    return todos;
}

async function addTodo(newTodo) {
    let sql = `
    INSERT INTO todos(UserId, title, status)
    VALUES("${newTodo.UserId}", "${newTodo.title}", "${newTodo.status ?? true}")
  `

    await con.query(sql)
    return true
}


// // Delete User 
async function deleteTodo(todoId) {
    let sql = `DELETE FROM todos
    WHERE TodoId = ${todoId}
  `
    await con.query(sql)
}

// Useful functions
async function getTodos() {
    let sql = `
    SELECT * FROM todos 
  `
    return await con.query(sql)
}


async function getTodoByUserId(userid) {
    let sql = `
    SELECT * FROM todos WHERE UserId=${userid}`
    return await con.query(sql);
}


async function getTodoById(todoId) {
    let sql = `
    SELECT * FROM todos WHERE TodoId=${todoId}`
    return await con.query(sql);
}

async function editTodo(newTodo) {
    let updatedTodo = await getTodoById(newTodo.TodoId)
    if (updatedTodo.length < 0) throw Error("No Todo eists!")

    let sql = `UPDATE todos
    SET title = "${newTodo.title}" ,status=${newTodo.status}
    WHERE TodoId = ${newTodo.TodoId}
  `
    await con.query(sql)
    updatedTodo = await getTodoById(newTodo.TodoId)
    return updatedTodo[0];

}
module.exports = {
    getAllTodos, addTodo, deleteTodo, getTodoByUserId, editTodo
}