const express=require('express');
const router = express.Router();
const Task=require('../models/Task');
// const addMinutes=require('../utils/addMinutes');



router.post('/add',async(req,res)=>{

    const { TaskName, TaskDiscription, Creator, Duration, CreatedAt} = req.body;
    // const expireAt = addMinutes(duration, new Date(createdAt));  
    

    const task= new Task({
        TaskName:TaskName,
        TaskDiscription:TaskDiscription,
        Creator:Creator,
        Duration:Duration,
        CreatedAt:CreatedAt,
        // expireAt:expireAt

    });
 
    try {
        const savetask=await task.save();
        res.json(savetask);
    }
    catch (err) {
        res.json({message:err})
    }
    
});
router.get('/list',async(req,res)=>{
    try{
        const tasks=await Task.find();
        res.json(tasks);
    } catch(err){
        res.json({message:err});
    }
});
module.exports=router;