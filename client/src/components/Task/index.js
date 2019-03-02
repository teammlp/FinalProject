import React from 'react'
require("./task.css");

const Tasks = (props) => (
    <div className="container">
        <div className="row">
            <div className="column xlarge-2 medium-2 hide-mobile"></div>
            <div className="column xlarge-8 medium 8 small-12">
                <div className="card tasks" id="card-tasks-text">
                    {   
                        props.tasks.map((task) =>
                            <div className="single-task text-capitalize" key={task}>
                                <h4>{task}</h4>
                                <a 
                                onClick={(e) => {
                                props.deleteTask(task);
                                }}
                                >
                                <i className="fas fa-times"></i>
                                </a>
                            </div>
                        )
                    }
                </div>
            </div>
            <div className="column xlarge-2 medium-2 hide-mobile"></div>
        </div>
    </div>
)

export default Tasks