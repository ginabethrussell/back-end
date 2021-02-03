const usersData = require("./data/users/users");
const howtosData = require("./data/howtos/howtos");

let users = [...usersData.users];
let howtos = [...howtosData.howtos];

function getUsers() {
    return users
}

function getUserById(id){ 
    return users.find(user => user.id.toString() === id)
}

function createUser(data){
    const payload = {
        id: String(users.length + 1),
        ...data,
    }
    users.push(payload)
    return payload
}

function loginUser(data){
    const username = data.username;
    const foundUser = users.filter(user => user.username === username);
    if (foundUser.length > 0){
        return foundUser[0]
    }else {
        return null
    }
}

function getHowtos() {
    return howtos
}

function getHowtoById(id){
    return howtos.find(howto => howto.id === Number(id))
}

function createHowto(data){
    const lastId = howtos[howtos.length - 1].id
    const payload = {
        id: (lastId + 1),
        ...data
    }
    howtos.push(payload)
    return howtos
}

function updateHowto(id, data) {
    const index = howtos.findIndex(howto => howto.id === Number(id))
    howtos[index] = { ...data };
    return howtos[index]; 
}

function deleteHowto(id) {
    const deletedHowto = howtos.find(howto => howto.id === Number(id));
    howtos = howtos.filter(howto => howto.id !== Number(id));
    return deletedHowto;   
}

function increaseHowtoLikes(id) {
    const index = howtos.findIndex(howto => howto.id === Number(id))
    howtos[index] = { ...howtos[index], likes: howtos[index].likes + 1 };
    return howtos[index]; 
}
module.exports = {
    getUsers,
    getUserById,
    createUser,
    loginUser, 
    getHowtos,
    getHowtoById,
    createHowto,
    updateHowto, 
    deleteHowto,
    increaseHowtoLikes
}