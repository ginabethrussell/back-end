const db = require('../data/config');

function getClasses(){
    return db('tests').select('*');
}

function getClassById(id){
    return db('tests').where('id', id).first();
}

function getClassBy(filter){
    return db(tests).where(filter).first();
}

function updateClass(changes, id){
    return db('tests').where('id', id).update(changes);
}

function removeClass(id){
    return db('tests').where('id', id).del();
}

module.exports = {
    getClassBy,
    getClasses,
    getClassById,
    updateClass,
    removeClass
}