import mongoose, {Schema, Model} from "mongoose";
import IProduct from "./Product";

interface ICartItem{
    id: string,
    product: IProduct,
    quantity: number,
    total: number
}

const CartItemSchema = new Schema<ICartItem>({
    id: String,
    product: IProduct,
    quantity: Number, 
    total: Number

}, { versionKey: false });

const ICartItem: Model<ICartItem> = mongoose.models.CartItem || mongoose.model<ICartItem>('CartItem', CartItemSchema);

export default ICartItem;