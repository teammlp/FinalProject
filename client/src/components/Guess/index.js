import React from 'react'

const Guess = (props) => (
    <div className="text-center guess">
        <button onClick={props.whatTodo} className="btn btn-primary">What to do?</button>
    </div>
)


export default Guess