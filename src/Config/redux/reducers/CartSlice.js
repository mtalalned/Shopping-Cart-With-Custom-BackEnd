import { createSlice} from "@reduxjs/toolkit";

const CartSlice = createSlice ({
    name: 'Cart',
    initialState: {
        cart:[]
    },
    reducers: {
        addToCart: (state , action)=> {
            const index = state.cart.findIndex(item => item.id === action.payload.id)
            console.log (index)
            // console.log (action.payload.id)
            if(index === -1){
                console.log('item maujood nahi hai')
                state.cart.push({...action.payload , quantity: 1})
            } else {
                state.cart[index].quantity += 1
            }
        },
        deleteFromCart: (state , action) => {
            const index = state.cart.findIndex(item => item.id === action.payload.id)
            state.cart.splice (index , 1)
        },
        addQuantityToItem: (state , action) => {
            const index = state.cart.findIndex(item => item.id === action.payload.id)
            state.cart[index].quantity +=1
        },
        lessQuantityToItem: (state , action) => {
            const index = state.cart.findIndex(item => item.id === action.payload.id)
            if (state.cart[index].quantity === 1){
                state.cart.splice (index , 1)
            } else {
            state.cart[index].quantity -=1
            }
        }
    }
})

export const {addToCart , addQuantityToItem , lessQuantityToItem , deleteFromCart} = CartSlice.actions
export default CartSlice.reducer