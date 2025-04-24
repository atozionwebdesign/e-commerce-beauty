import mongoose, {Document, Schema, Model} from 'mongoose';

interface IProduct extends Document{

    name: string,
    short_description: string, 
    long_description: string,
    images: Array<string>,
    price: string,
    sizes: Array<string>,
    rating: number,
    num_of_ratings: number,
    type: string,
    ingredients:Array<{name:string, details:string}>
    includes:Array<string | {id: string}>
}

const ProductSchema = new Schema<IProduct>({
   
    name: {
        type: String
    },
    short_description: String, 
    long_description: String,
    images: Array,
    price: String,
    sizes: Array,
    rating: Number,
    num_of_ratings: Number,
    type: String,
    ingredients: Array,
    includes: Array
}, { versionKey: false });

const IProduct: Model<IProduct> = mongoose.models.Product || mongoose.model<IProduct>('Product', ProductSchema);

export default IProduct;