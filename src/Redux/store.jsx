import { createStore } from "redux";

function reduce(state, action) {
    if (action.type === "INCREMENT") {
        return { counter: state.counter + action.payload };
    } else if (action.type === "DECREMENT") {
        return { counter: state.counter - action.payload };
    }
    return state;
}

const initialStore = { counter: 0 };
const store = createStore(reduce, initialStore);

export default store;
