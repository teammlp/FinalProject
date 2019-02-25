import React from 'react';
require("./Delete.css");

const Deleteall = (props) => (
    <div className="text-center deleteall">
            <button onClick={props.deleteAll} className="btn btn-rounded btn-outlined red-btn">Delete All</button>
    </div>
)

export default Deleteall