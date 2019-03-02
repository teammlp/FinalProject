import React from 'react';
require('./Create.css');

const Create = (props) => (
    <div className="container create">
        <div className="card" id="container-create-card">
            <form onSubmit={props.onSubmit}>
                <div className="input-group-prepend">
                    <div className="input-group-text bg-primary text-white">
                    <i className="fas fa-book"/>
                    </div>
                    <input type="text" name="singletask" autoComplete="off" className="text-capitalize" />
                </div>
                <div className="center-text">
                    <button class="btn btn-primary" type="submit" id="task-submit-btn">Create Task</button>
                </div>
            </form>
        </div>
    </div>
)


export default Create