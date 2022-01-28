const collections = require('../config/collections')
var db = require('../config/db_connection') 
const bcrypt = require('bcrypt')
const async = require('hbs/lib/async')
const { reject, promise } = require('bcrypt/promises')
const { response } = require('express')
const { status } = require('express/lib/response')
const { ObjectId } = require('mongodb')
const res = require('express/lib/response')

const hasInIt=(list, item) =>{
    for(i in list){
        if(list[i]===item) return true
        else return false
    }
}


module.exports={

    doSignup:(userData)=>{
        return new Promise(async(resolve,reject)=>{
            userData.Password= await bcrypt.hash(userData.Password,10)
            db.get().collection(collections.USER_COLLECTION).insertOne(userData).then((data)=>{
                resolve(data)
            })
        })
    },

    doLogin:(userData)=>{
        return new Promise(async(resolve, reject)=>{
            let response={}
            let user = await db.get().collection(collections.USER_COLLECTION).findOne({Email:userData.Email})
            if(user){
                bcrypt.compare(userData.Password, user.Password).then((status)=>{
                    if(status){
                        console.log('Login Success');
                        response.user = user
                        response.status = true
                        resolve(response)
                    }else{
                        console.log('Login Failed');
                        resolve({status:false})
                    }
                })
            }else{
                console.log('User not found')
                resolve({status:false})
            }
        })
    },

    addToCart:(productId, userId)=>{
        return new Promise(async (resolve, reject)=>{
            let userCart = await db.get().collection(collections.CART_COLLECTION).findOne({user:ObjectId(userId)})
            if(userCart){
                db.get().collection(collections.CART_COLLECTION).update({user:ObjectId(userId)},{
                    $addToSet: {products: ObjectId(productId)}
                }).then((response)=>{
                    resolve(response)
                })
            }else{
                let cart = {
                    user:  ObjectId(userId),
                    products: [ObjectId(productId)]
                }
                db.get().collection(collections.CART_COLLECTION).insertOne(cart).then((response)=>{
                    resolve(response)
                })
            }
        })
    },

    getCartProducts:(userId)=>{
        return new Promise(async(resolve,reject)=>{
            db.get().collection(collections.CART_COLLECTION).aggregate([
                {
                    $match:{user:ObjectId(userId)}
                },
                {
                    $lookup:{
                        from:collections.PRODUCT_COLECTION,
                        let:{products:'$products'},
                        pipeline:[
                            {
                                $match:{
                                    $expr:{
                                        $in:['$_id','$$products']
                                    }
                                }
                            }
                        ],
                        as: 'cartItems'
                    }
                }
            ]).toArray().then((cartItems)=>{
                //console.log(cartItems)
                if(cartItems.length === 0){
                    resolve(null)
                }else{
                    resolve(cartItems[0].cartItems)
                }
            })
            
        })
    },

    getCartCount:(userId)=>{
        return new Promise((resolve, reject)=>{
            db.get().collection(collections.CART_COLLECTION).findOne({user:ObjectId(userId)}).then((user)=>{
                if(user){
                    //console.log(user.products) 
                    resolve(user.products.length)
                }else{
                    resolve(0)
                }
            })
        })
    }

}