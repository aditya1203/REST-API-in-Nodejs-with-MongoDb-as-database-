const mongoose=require('mongoose');

const TaskSchema=new mongoose.Schema({
    TaskName:{
        type:String,
        require:true
    },
    TaskDiscription:{
        type:String,
        require:true
    },
    Creator:{
        type:Date,
        require:true
    },
    Duration:{
        type:Number,
        require:true
    },
    CreatedAt:{
        type:Date,
        default:Date.now
    }
    // expireAt:{
    //     type:Date,
    // }
});
module.exports=mongoose.model('Task',TaskSchema);