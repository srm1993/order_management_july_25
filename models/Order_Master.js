const mongoose=require('mongoose');
const OrderSchema=new mongoose.Schema({
    OrderDate:{
        type:Date,
        required:true
    },
    ProdId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'ProductMaster',
        required:true
    },
    ProdRate:{
        type:Number,
        required:true
    },
    OrderQty:{
        type:Number,
        required:true
    },
    OrderValue:{
        type:Number,
        required:true
    }
})
const OrderMaster=mongoose.model('OrderMaster',OrderSchema);
module.exports=OrderMaster;