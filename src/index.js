const express=require('express')
require('./db/mongoose')
const taskRouter=require('./routers/task')
const userRouter=require('./routers/user')

const app=express()
const port = process.env.PORT 






const multer=require('multer')
const { UnorderedBulkOperation } = require('mongodb')
const upload=multer({
    dest:'images',
    limits:{
        fileSize:1000000
    },
    fileFilter(req,file,cb){
        if(!file.originalname.match(/\.(doc|docx)$/)){  // go tohttps://regex101.com/ for more 
            return cb(new Error('please upload a image'))
        }
        cb(undefined,true)
    }
})

app.post('/upload',upload.single('upload'),(req,res)=>{
   
    res.send()

},(error,req,res,next)=>{
    res.status(400).send({error:error.message})
})

//////////////////////////////////////////
// const errorMiddleware=(req,res,next)=>{
//     throw new Error('From my middleware')
// }

// app.post('/upload',errorMiddleware,(req,res)=>{
    
//     res.send()
// },(error,req,res,next)=>{
//     res.status(400).send({error:error.message})
// })
/////////////////////////////////////////////////////////////////















// app.use((req,res,next)=>{
//     // console.log(req.method,req.path)
//     if(req.method=='GET'){
//         res.send('GET requests are disabled')
//     }else{
//         next()
//     }
   
// })


// app.use((req,res,next)=>{
//     res.status(503).send('Site is currently down. Check back soon!')
// })


app.use(express.json())
app.use(userRouter)
app.use(taskRouter)


app.listen(port,()=>{
    console.log('Server is up to on port '+port)
})






// without middleware: new request -> run route handler
// with middleware:new request->do something -> run route handler










// const bcrypt=require('bcryptjs')


// const myFunction=async()=>{
//     const  password='prabhakar'
//     const hashedPassword=await bcrypt.hash(password,8)

//     console.log(password)
//     console.log(hashedPassword)

//     const isMatch=await bcrypt.compare('prabhakar',hashedPassword)
//     console.log(isMatch)

// }


// myFunction()



// const jwt =require('jsonwebtoken')

// const myFunction=async()=>{
//     const token=jwt.sign({_id:'abc123'},'thisismynewcourse')
//     console.log(token)
//     console.log(token)

//     const data=jwt.verify(token,'thisismynewcourse')
//     console.log(data)
// }

// myFunction()








// const pet={
//     name:'Hal'
// }

// // toJSON will triggered whenever their is a JSON CALL
// // pet.toJSON=function(){
// //        console.log(this)
// //        return this
// // }

// pet.toJSON=function(){
//    return {}
// }

// console.log(JSON.stringify(pet))





// const Task=require('./models/task')
// const User=require('./models/user')


// const main=async()=>{
//     // const task=await Task.findById('62bc4dc7161ad6f6459cc3d6')
//     // await task.populate('owner')
//     // console.log(task.owner)

//     const user=await User.findById('62bc4d57161ad6f6459cc3cd')
//     await user.populate('tasks')
//     console.log(user.tasks)
// }

// main()



