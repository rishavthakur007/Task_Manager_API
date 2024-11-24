const mongoose=require('mongoose')
const validator=require('validator')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const Task = require('./task')

const userSchema=new mongoose.Schema({
  
        name:{
            type:String,
            required:true,
           
        },
    
        email:{
             type:String,
             unique:true,
             required:true,
             trim:true,
             lowercase:true,
             validate(value){
                if(!validator.isEmail(value)){
                    throw new Error('Email is invalid')
                }
             }
        },
        password:{
                
            type:String,
            required:true,
            minlength:7,
            trim:true,
            validate(value){
                if(value.toLowerCase().includes('password')){
                    throw new Error('password cannot contain "password" ')
                }
            }
    
        },
        age:{
            type:Number,
            default:0
            ,validate(value){
                if(value<0){
                    throw new Error('Age must be a positive number')
                }
            }
        },
        tokens:[{
            token:{
            type:String,
            required:true
            }
        }],
        avatar:{
            type:Buffer
        }
        
    },{
        timestamps:true
    })

    //toJSON , this will triggered whenever there is stringfy operation
userSchema.methods.toJSON=function(){  //userSchema.methods.getPublicProfile=function
    const user=this
    const userObject=user.toObject()

    delete userObject.tokens
    delete userObject.password
    delete userObject.avatar

    return userObject
}

userSchema.methods.generateAuthToken=async function(){
    const user=this
   
    const token=jwt.sign({_id:user._id},process.env.JWT_SECRET  )
    //,{expires:'7 days'}
  

    user.tokens=user.tokens.concat({token})
    await user.save()

    return token
}

// virtual schema is not a table entity , it is just a virtual relation defined between
// user and task linked to that user

userSchema.virtual('tasks',{
    ref:'Task',
    localField:'_id',
    foreignField:'owner'
})



userSchema.statics.findByCredentials=async(email,password)=>{
    const user=await User.findOne({email})
    
    if(!user){
        throw new Error('Unable to login')


    }
    const isMatch=await bcrypt.compare(password,user.password)
    if(!isMatch){
        throw new Error('Unable to login')

    }
    return user
}

// IN bcypt , password can is encoded but it cannot be decoded



//pre and post - it refers to something that should occur after just happening some event.
//ex - saving user data after some event as given below(coverting into hashedPassword)
//pre-before saving,this event will occur
//post-after saving, this event will occur
// we are using standard function not arrow function, becoz here binding play an important role 
//but in arrow function there is no binding
//this- it refers to current user data which has not been saved yet
// next - for indication, that event is over now, you can proceed further,otherwise it would stuck

// this function will be triggered when there is save operation in routers/user.js
// Middleware

//////////Hash the plain text password before saving

  userSchema.pre('save',async function(next){
        const user=this

        if(user.isModified('password')){
            user.password=await bcrypt.hash(user.password,8)
        }

        next()
    })

//Middleware
// second middleware below

//Delete user tasks when user is removed
userSchema.pre('remove',async function(next){
    const user=this
    await Task.deleteMany({owner:user._id})
    next()
})






const User=mongoose.model('User',userSchema)


module.exports=User










// const me=new User({
//           name:'Prabhakar',
//           email:'prabhakar@gmail.com',
//           password:'passwor84658',
//           age:2
 
// })


// me.save().then(()=>{
//     console.log(me)
// }).catch((error)=>{
//     console.log("Error!",error)
// })

