import React from "react";

const Counter = ({counter, inc, dec, rnd}) => {
    return (
        <div className="jumbotron">
            <h2>{counter}</h2>
            <buton onClick={dec} className="btn btn-primary btm-lg">DEC</buton>
            <buton onClick={inc} className="btn btn-primary btm-lg">INC</buton>
            <buton onClick={rnd} className="btn btn-primary btm-lg">RND</buton>
        </div>
    )
}
export default Counter;