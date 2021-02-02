const usersData = require("./data/users/users");
const howtosData = require("./data/howtos/howtos");

const users = usersData.users;
const howtos = howtosData.howtos;

function getUsers() {
    console.log(typeof(users));
    return users
}

function getUserById(id){ 
    console.log(id)
    return users.find(user => user.id === id)
}

function createUser(data){
    const payload = {
        id: String(users.length + 1),
        ...data,
    }
    users.push(payload)
    return payload
}

function updateUser(id, data) {
    const index = users.findIndex(user => user.id === id)
    users[index] = {
        ...users[index], 
        ...data
    }
    return users[index]
}

function deleteUser(id) {
    users = users.filter(user => user.id != id)
}

function getHowtos() {
    return howtos
}

function getHowtoById(id){
    return howtos.find(howto => howto.id === Number(id))
}

function createHowto(data){
    const payload = {
        id: String(howtos.length + 1),
        ...data,
    }
    howtos.push(payload)
    return payload
}

function updateHowto(id, data) {
    const index = howtos.findIndex(howto => howto.id === id)
    howtos[index] = {
        ...howtos[index], 
        ...data
    }
    return howtos[index]
}

function deleteHowto(id) {
    howtos = howtos.filter(howto => howto.id != id)
}

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser, 
    deleteUser,
    getHowtos,
    getHowtoById,
    createHowto,
    updateHowto, 
    deleteHowto
}