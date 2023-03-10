import React from "react";
import { TaskItem } from './taskItem';

// Class to view taskItems as tasks
export class Tasks extends React.Component{

    render(){
        return this.props.tasks.map(
            (task)=>{
                return <TaskItem task={task} key={task._id} Reload={this.props.Reload}></TaskItem>
            }
        );
    }
    
}