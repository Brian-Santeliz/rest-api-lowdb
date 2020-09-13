const lowdb = require('lowdb')
const FileAsync = require('lowdb/adapters/FileAsync')

let bd
 exports.connection = async()=>{
    const adapter = new FileAsync('bd.json');
    db = await lowdb(adapter);
    db.defaults({propiedades:[]}).write()
}

exports.getConnection = ()=>bd