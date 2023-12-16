// const users = [
//     {
//         "userName": "Keerthi123",
//         "password": "keerthi@10"
//     }, {
//         "userName": "KPRG064",
//         "password": "kprg@10"
//     }, {
//         "userName": "KPRG2706",
//         "password": "kprg@10"
//     },
// ]

// exports.getAllUsers = () =>{
//     return users;
// }



const con = require("./db_connect");

async function createTable() {
  let sql = `
    CREATE TABLE IF NOT EXISTS users (
      UserId INT NOT NULL AUTO_INCREMENT,
      UserName VARCHAR(25) NOT NULL,
      Password VARCHAR(255) NOT NULL,
      Email VARCHAR(255) NOT NULL,
      CONSTRAINT UserPK PRIMARY KEY(UserId));`

      await con.query(sql)
}

createTable()

// CRUD
// Read - Login User 

// Testing out login function
// let newUser = {
//   username: "cathy123",
//   password: "icecream"
// }

// login(newUser);

async function login(user) {
  let userResult = await getUser(user.username)
  if(!userResult[0]) throw Error("Username not found!!")
  if(userResult[0].Password != user.password) throw Error("Password Incorrect!!")

  return userResult[0]
}

// Register (Create) New User
async function register(user) {
  let userResult = await getUser(user.UserName)
  if(userResult.length > 0) throw Error("Username already in use!!")

  let sql = `
    INSERT INTO users(UserName, Password, Email)
    VALUES("${user.UserName}", "${user.Password}", "${user.Email}")
  `

  await con.query(sql)
  const newUser = await getUser(user.UserName)
  console.log('newUser[0]: ', newUser);
  return newUser[0]
}

// Update - CRUD
async function editUser(user) {
  let updatedUser = await getUser(user.UserName)
  if(updatedUser.length > 0) throw Error("Username not available!")

  let sql = `UPDATE users
    SET UserName = "${user.username}"
    WHERE UserId = ${user.UserId}
  `
  await con.query(sql)
  updatedUser = await getUser(user.UserName)
  return updatedUser[0]
}

// Delete User 
async function deleteUser(user) {
  let sql = `DELETE FROM users
    WHERE UserId = ${user.UserId}
  `
  await con.query(sql)
}

// Useful functions
async function getUser(username) {
  let sql = `
    SELECT * FROM users 
    WHERE UserName = "${username}" 
  `
  return await con.query(sql)
}

module.exports = {login, register, editUser, deleteUser}