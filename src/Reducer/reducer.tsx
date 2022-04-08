
import { ADDTOCART } from "../Reducer/constants";

const initialState = {
    cart: [],
};

function reducer(state = initialState, action: any) {

    switch (action.type) {
        case ADDTOCART:

            const result = action.payload;
            console.log("result", result)

            return {
                ...state,
                cart: [...state.cart, result]
            }

        default:
            return state
    }
}

export default reducer;