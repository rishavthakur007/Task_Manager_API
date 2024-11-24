// CRUD  create read update delete

// const mongodb=require('mongodb')
// const MongoClient=mongodb.MongoClient 


const {MongoClient,ObjectID, ObjectId}=require('mongodb')

const connectionURL='mongodb://127.0.0.1:27017'


const databaseName='task-manager'




MongoClient.connect(connectionURL,{useNewUrlParser:true},(error,client)=>{
    if(error){
        return console.log("unable to connect to database")

    }



const db=client.db(databaseName)

// db.collection('users').deleteMany({
//     age:27
// }).then((result)=>{
//     console.log(result)
// }).catch((error)=>{

//    console.log(error)
    
// })

// db.collection('tasks').deleteOne({
//     "description" : "Renew inspection"
// }).then((result)=>{
//     console.log(result)
// }).catch((error)=>{
//     console.log(error)
// })


// db.collection('tasks').findOne({"description" : "clean the house "},(error,user)=>{

//     if(error){
//         return console.log("unable to fetch")
//     }
    
//     console.log(user)
    
//     }
//     )





})
























////////////////////////////////////////////////////////////////////////////////////////////////


// MongoClient.connect(connectionURL,{useNewUrlParser:true},(error,client)=>{
//     if(error){
//         return console.log("unable to connect to database")

//     }



// const db=client.db(databaseName)

// // const updatePromise=db.collection('users').updateOne({
// //     _id:new ObjectId("62b43fbd5204a48d387945d2")

// // },{
// //     $set:{                                  //////////////////old way to do that
// //         name:"don"
// //     }
// // })

// // updatePromise.then((result)=>{
// //     console.log(result)
// // }).catch((error)=> {
// //     console.log(error)
// // })
// ////////////// promise is nothing but a object , and it is asynchronous becoz it fetches the data from database


// // db.collection('users').updateOne({
// //     _id: new ObjectId("62b43fbd5204a48d387945d2")

// // },{
// //     $set:{
// //         name:'don'
// //     }
// // }).then((result)=>{
// //     console.log(result)
// // }).catch((error)=> {
// //     console.log(error)
// // })



// // db.collection('tasks').updateMany({
// //     completed:false
// // },{
// //     $set:{
// //         completed:true
// //     }
// // }).then((result)=>{
// //     console.log(result.modifiedCount)
// // }).catch((error)=>{
// //     console.log(error)
// // })






// })








/////////////////////////////////////////////////////////////////////////////////////////////////////














/////////////////////////// findOne 


// MongoClient.connect(connectionURL,{useNewUrlParser:true},(error,client)=>{
//     if(error){
//         return console.log("unable to connect to database")

//     }
           
// const db=client.db(databaseName)


// db.collection('users').findOne({_id:new ObjectID("62b438072f4ca3331e6c20b0")},(error,user)=>{  ///_id:"62b438072f4ca3331e6c20b0" we cann't use that 


//     if(error){
//         return console.log("unable to fetch")
//     }
    
//     console.log(user)
    
//     }
//     )
    
    
  

    // db.collection('users').find({age:27}).toArray((error,users)=>{
    //     console.log(users)
    // })

//     db.collection('users').find({age:27}).count((error,count)=>{
//         console.log(count)
//     })



// db.collection('tasks').find({completed:false}).toArray((error,tasks)=>{
//     console.log(tasks)
// })

//    })






/////
// db.collection('users').findOne({name:'ashish'},(error,user)=>{

// if(error){
//     return console.log("unable to fetch")
// }

// console.log(user)

// }
// )


// })
/////









//////////////////////////////////////////////////////////////////////////////

// MongoClient.connect(connectionURL,{useNewUrlParser:true},(error,client)=>{
//     if(error){
//         return console.log("unable to connect to database")

//     }
           
// const db=client.db(databaseName)

// // db.collection('users').insertOne(
// //     {

// //         _id:id,
// //         name:'prabhakar',
// //         age:26
// //     }
// // ,(error,result)=>{
      
// //     if(error){
// //         return console.log("unable to insert documents")


// //     }

// //     // console.log(result.insertedIds)
// //     console.log(result)

// // })



// })







////////////////////////////////////////////////////////////////////////

// const id=new ObjectID()
// // console.log(id)
// // console.log(id.getTimestamp())

// console.log(id.id.length)
// console.log(id.id)
// console.log(id.toHexString().length)
// console.log(id.toHexString())


/////////////////////////////////////////////////////












////////////////////////////////////////////////////////////////////////




// MongoClient.connect(connectionURL,{useNewUrlParser:true},(error,client)=>{
//     if(error){
//         return console.log("unable to connect to database")

//     }
           
// const db=client.db(databaseName)

// // db.collection('users').insertOne({
// //     name:"prabhakar ",
// //     age:27
// // },(error,result)=>{
// //     if(error){
// //         return console.log("Unable to insert user")

// //     }

// //     console.log(result) // result.ops is not working

// // })

// // console.log("connected")


/////////////////////////////////////////////////


// db.collection('users').insertMany([

// {
//     name:'ashish',
//     age:56
// },

// {
//        name:'prabhakar'
//        ,age:22
// }


// ],(error,result)=>{
      
//     if(error){
//         return console.log("unable to insert documents")


//     }

//     console.log(result)

// })



// })


//////////////////////////////////////////////////////////////////




// MongoClient.connect(connectionURL,{useNewUrlParser:true},(error,client)=>{
//     if(error){
//         return console.log("unable to connect to database")

//     }
           
// const db=client.db(databaseName)

// db.collection('task').insertMany([

//     {
//         description:'clean the house '
//         ,completed:true
//     },
//     {
//         description:"Renew inspection",
//         completed:false
//     },
//     {
//         description:'Pot plants',
//         completed:false
//     }



// ],(error,result)=>{
      
//     if(error){
//         return console.log("unable to insert documents")


//     }

//     console.log(result.insertedIds)
//     //console.log(result)

// })



// })


////////////////////////////////////////////////////////////////



