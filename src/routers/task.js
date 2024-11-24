const express=require('express')
const Task=require('../models/task')
const auth=require('../middleware/auth')
const router=new express.Router()


router.post('/tasks',auth,async(req,res)=>{
    // const task=new Task(req.body)

    const task=new Task({
        ...req.body,    //...req.body - it is a vs6 syntax where the body is copied to object that is {}
        owner:req.user._id
    })

try{
    await task.save()
        res.status(201).send(task)
    }catch(e){
        res.status(400).send()
    }
})


// app.post('/tasks',(req,res)=>{
//     const task=new Task(req.body)

//     task.save().then(()=>{
//         res.status(201).send(task)
//     }).catch((e)=>{
//         res.status(400).send(e)
//     })
// })



//GET  /tasks?completed=true
//GET  /tasks?limit=10&skip=20
//GET  /tasks?sortBy=createdAt:desc // here you can use any special character other than ':'

router.get('/tasks',auth,async(req,res)=>{
     
    const match={}
    const sort={}
      
    if(req.query.completed){
        match.completed=req.query.completed==='true'
    }


    if(req.query.sortBy){
        const parts=req.query.sortBy.split(':')
        sort[parts[0]]=parts[1]==='desc'?-1:1
    }

    try{
        // const tasks=await Task.find({})
        // const tasks=await Task.find({owner:req.user._id})
        // await req.user.populate('tasks')


         
         await req.user.populate({
            path:'tasks',
            match,
            options:{
                // limit:2
                limit:parseInt(req.query.limit),
                skip:parseInt(req.query.skip),
                sort
                // sort:{
                  
                //      completed:-1
                     
                //     // createdAt:-1
                //      // -1 for desc and 1 for inc
                // }
            }

         })  

        res.send(req.user.tasks)
    }catch(e){
        res.status(500).send()
    }
})






// app.get('/tasks',(req,res)=>{
//     Task.find({}).then((tasks)=>{
//         res.send(tasks)
//     }).catch((e)=>{
//         res.status(500).send()
//     })
// })





router.get('/tasks/:id',auth,async(req,res)=>{
    const _id=req.params.id

   try{
    // const task=await Task.findById(_id)
    const task=await Task.findOne({_id,owner:req.user._id})
        if(!task){
            return res.status(404).send()
        }
        res.send(task)
    }catch(e){
        res.status(500).send()
    }
})

// app.get('/tasks/:id',(req,res)=>{
//     const _id=req.params.id

//     Task.findById(_id).then((task)=>{
//         if(!task){
//             return res.status(404).send()
//         }
//         res.send(task)
//     }).catch((e)=>{
//         res.status(500).send()
//     })
// })



router.patch('/tasks/:id',auth,async(req,res)=>{

    const updates=Object.keys(req.body)
    const allowedUpdates=['description','completed']
    const isValidOperation=updates.every((update)=>allowedUpdates.includes(update))
    
    if(!isValidOperation){
        return res.status(400).send({error:'Invalid updates!'})
    }

     try{
    //          const task=await Task.findById(req.params.id)

               const task=await Task.findOne({_id:req.params.id,owner:req.user._id})

             updates.forEach((update)=>task[update]=req.body[update])
             await task.save()



             if(!task){
                return res.status(404).send()
            }
    

        // const task=await Task.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})

        res.send(task)
     }catch(e){
        res.status(400).send(e)

     }
})


router.delete('/tasks/:id',auth,async(req,res)=>{
    try{
        // const task=await Task.findByIdAndDelete(req.params.id)
        const task=await Task.findByIdAndDelete({_id:req.params.id,owner:req.user._id})
        

        if(!task){
            return res.status(404).send()
        }
        res.send(task)
    }catch(e){
        res.status(500).send()
    }
})





module.exports=router
