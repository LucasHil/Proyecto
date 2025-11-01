import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {type:String, required: true},
    description: {type:String, required: true},
    price: {type: Number, required:true},
    image: {type: Array, required:true},
    category: {type: String, required:true},
    subCategory: {type: String, required:true},
    sizes: {type: [String], required:true},
    bestseller: {type:Boolean},
    date: {type: Number, required: true}
})
//Para no volver a crearlo en caso de que se ejecute el código de nuevo
const productModel = mongoose.models.product || mongoose.model("product", productSchema);

export default productModel