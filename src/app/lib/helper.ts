import ICartItem from "../models/CartItem";

export function getQuantity(id:string, cart:ICartItem[]){
    let quantity = cart?.find(i => i.id === id)?.quantity;
    if (quantity == undefined){
        quantity = 1
    }
    return quantity;
}
