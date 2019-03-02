import React from 'react'

const Guess = (props) => (
    <div className="text-center guess">
        <button onClick={props.whatTodo} className="btn btn-warning">Need a suggestion?</button>
    </div>
)


export default Guess;