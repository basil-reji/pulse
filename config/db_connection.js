const mongoClient = require('mongodb').MongoClient
const collections = require('./collections')

const state = {
    db: null
}

module.exports.connect=function(done){
    const url = 'mongodb://127.0.0.1:27017'
    const dbname = collections.DATABASE

    mongoClient.connect(url, (err, data)=>{
        if(err) return done(err)
        state.db = data.db(dbname)
        done()
    })
}

module.exports.get=function(){
    return state.db
}