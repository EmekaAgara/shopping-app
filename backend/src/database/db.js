const {MongoClient} = require('mongodb');

const uri ='mongodb+srv://emekaagara:08095011929@cluster0.19oyrox.mongodb.net/?retryWrites=true&w=majority'

const client = new MongoClient(uri);

const database = client.db('test');
const products = database.collection('products');


module.exports = {
    products
}