import { Double, Int32 } from "mongodb";
import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    name: {
        type: String
    },
    short_description: String, 
    long_description: String,
    img: String,
    price: String,
    sizes: Array,
    rating: Double,
    num_of_ratings: Int32,
    type: String
}, { versionKey: false });

const Product = mongoose.models.Product ||mongoose.model('Product', ProductSchema);

export default Product;