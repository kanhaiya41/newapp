import mongoose from "mongoose";

const postSchema=new mongoose.Schema({
    cation:{
        type:String,
        default:''
    },
    image:{
        type:String,
        require:true
    },
    author:{
        type:mongoose.Schema.Types.ObjectId, 
        ref:'User', 
        require:true
    },
    likes:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        }
    ],
    comment:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Comment'
        }
    ]
})


export const Post=mongoose.model('Post',postSchema); 