
const { getDb } = require('../config/connection');
const collection = require('../config/collection')


module.exports = {
    addProduct: (product, callback) => {
        let db = getDb();
        db.collection('product').insertOne(product).then((data) => {
            console.log("dataaaaa......", data);
            callback(data.insertedId); // return only the ID
        });
    },
    getAllProducts: ()=>{
        return new Promise(async(resolve,reject) => {
            let db = getDb()
            let products =await db.collection(collection.PRODUCT_collection).find().toArray()
            resolve(products)
        })
        }
    

} 