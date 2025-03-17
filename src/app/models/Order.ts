import { Int32 } from "mongodb";
import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    products: [
        {
            id: mongoose.Schema.Types.ObjectId,
            quantity: Int32
        }
    ]

}, { versionKey: false });

const Order = mongoose.models.Order ||mongoose.model('Order', OrderSchema);

export default Order;