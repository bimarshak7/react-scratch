import { ACTION } from '../actions/types.js';

const initialState = {
    test: [],
    
}

export default function (state = initialState, action) {
    switch (action.type) {
        case ACTION:
            return {
                ...state,
                test: action.payload,
            };
        default:
            return state;
    }

}