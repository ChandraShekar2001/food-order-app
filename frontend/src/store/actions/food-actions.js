import { foodActions } from "../index"


export const getAllFood = () => async (dispatch) => {
    dispatch(foodActions.getAllFoodRequest());
    const response = await fetch('http://localhost:8000/api/food/all')
    const data = await response.json();
    // console.log(data);
    if (data.message === 'success') {
        dispatch(foodActions.getAllFoodSuccess(data.foods));
    }else dispatch(foodActions.getAllFoodFailure(data.error));
}