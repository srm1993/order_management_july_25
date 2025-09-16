const mongoose=require('mongoose');
const productSchema=new mongoose.Schema({
    ProdName:{
        type:String,
        required:true
    },
    ProdRate:{
        type:Number,
        required:true
    },
    ProdQty:{
        type:Number,
        required:true
    }
});
const ProductMaster=mongoose.model('ProductMaster',productSchema);
module.exports=ProductMaster;