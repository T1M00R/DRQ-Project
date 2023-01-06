import React from "react";
import {taskItem} from './taskItem';

export class tasks extends React.Component{

    render(){
        return this.props.tasks.map(
            (task)=>{
                return <taskItem task={task} key={task._id} Reload={this.props.Reload}></taskItem>
            }
        );
    }
    
}