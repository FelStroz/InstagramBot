const Person = require('../model/person');
const mongoose = require('mongoose');
const newData = require('./newData');

const mongo = {
    connect: async (uri) => {
        await mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
            .catch(e => console.log(e));
        console.log("Conectado ao DB -> Encerrado");
    },
    insert: async () => {
        for (let data of newData) {
            let person = new Person(data);
            await person.save().catch((e) => {console.log(e)});
        }
        console.log("Inserir nomes no DB -> Encerrado");
    },
    find: async () => {
        let people = await Person.find().catch((e) => {console.log(e)});
        console.log("Procurar nomes no DB -> Encerrado");
        return people;
    },
}

module.exports = mongo;
