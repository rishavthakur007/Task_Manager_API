const mongoose=require('mongoose')


mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser:true,
    // useCreateIndex:true
    // useFindAndModify:false
})




















// const Task=mongoose.model('Task',{
//     description:{
//         type:String,
//         required:true,
//         trim:true
//     },
//     completed:{
//         type:Boolean,
//         default:false
//     }
// })

// const task=new Task({
//     description:'Eat lunch',
    
// })

// task.save().then(()=>{
//     console.log(task)
// }).catch((error)=>{
//     console.log(error)
// })
















// const User=mongoose.model('User',{
//     name:{
//         type:String,
//         required:true,
       
//     },

//     email:{
//          type:String,
//          required:true,
//          trim:true,
//          lowercase:true,
//          validate(value){
//             if(!validator.isEmail(value)){
//                 throw new Error('Email is invalid')
//             }
//          }
//     },
//     password:{
            
//         type:String,
//         required:true,
//         minlength:7,
//         trim:true,
//         validate(value){
//             if(value.toLowerCase().includes('password')){
//                 throw new Error('password cannot contain "password" ')
//             }
//         }

//     },
//     age:{
//         type:Number,
//         default:0
//         ,validate(value){
//             if(value<0){
//                 throw new Error('Age must be a positive number')
//             }
//         }
//     }
// })


// const me=new User({
//           name:'Prabhakar',
//           email:'prabhakar@gmail.com',
//           password:'passwor84658',
//           age:1
 
// })


// me.save().then(()=>{
//     console.log(me)
// }).catch((error)=>{
//     console.log("Error!",error)
// })