import React from "react";

const CartContext=React.createContext({
    cartList:[],
    onAddItem:()=>{},
    onDeleteItem:()=>{},
    onClearCartList:()=>{},
    onIncreaseQuantity:()=>{},
    onDecreaseQuantity:()=>{},
});

export default CartContext;