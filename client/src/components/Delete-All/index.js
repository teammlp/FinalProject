import React from 'react';
require("./Delete.css");

const Deleteall = (props) => (
    <div className="text-center deleteall">
            <button onClick={props.deleteAll} className="btn btn-danger btn-rounded btn-outlined">DELETE ALL</button>
    </div>
)

export default Deleteall