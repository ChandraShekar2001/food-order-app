import { cartActions } from "../index";

export const addItem = (id, quantity) => async (dispatch, getState) => {
    // console.log(id, quantity);
    let url = `http://localhost:8000/api/food/${id}`
    const response = await fetch(url)
    const data = await response.json()
    // console.log(data.food._id);
    dispatch(cartActions.addItemToCart(
        {
            id: data.food[0]._id,
            itemName: data.food[0].itemName,
            price: data.food[0].price,
            quantity:quantity
        }
    ))
        // console.log(data);
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));

}

export const removeItem = (id) => async (dispatch, getState) => {
    // console.log(id);
    let url = `http://localhost:8000/api/food/${id}`
    const response = await fetch(url)
    const data = await response.json()
    // console.log(data);
    dispatch(cartActions.removeItemsFromCart(
        {
            id: data.food[0]._id,
            name: data.food[0].itemName,
            price: data.food[0].price,
        }
    ))

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));

}

export const removeCompleteCartItem = (id) => async (dispatch, getState) => {
    // console.log(id);
    let url = `http://localhost:8000/api/food/${id}`
    const response = await fetch(url)
    const data = await response.json()
    // console.log(data);
    dispatch(cartActions.removeCompleteCartItem(
        {
            id: data.food[0]._id,
            name: data.food[0].itemName,
            price: data.food[0].price,
        }
    ))

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
}


