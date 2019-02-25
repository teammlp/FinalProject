import React from 'react'

const Guess = (props) => (
    <div className="text-center guess">
        <button onClick={props.whatTodo} className="btn btn-primary">Don't know where to start? Click ME 🔐 </button>
    </div>
)


export default Guess