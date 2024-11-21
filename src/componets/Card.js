import React from "react";
import { useSelector, useDispatch } from "react-redux";

function Card() {
    const counter = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch({ type: "INCREMENT", payload: 1 });
    };

    const handleDecrement = () => {
        if (counter > 0) {
            dispatch({ type: "DECREMENT", payload: 1 });
        }
    };

    return (
        <div className="card">
            <div className="main-content">
                <div className="header">
                    <img
                        src="https://applestore.am/media/wysiwyg/galaxy-s24-ultra.jpg"
                        alt="Samsung Galaxy S24"
                    />
                </div>
                <p className="heading">Samsung Galaxy S24</p>
                <div className="categories"></div>
            </div>
            <div className="footer">
                <button onClick={handleDecrement}>-</button>
                <span>{counter}</span>
                <button onClick={handleIncrement}>+</button>
            </div>
        </div>
    );
}

export default Card;
