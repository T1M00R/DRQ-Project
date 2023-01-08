import React from "react";
import Card from 'react-bootstrap/Card';
import Button  from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import axios from "axios";

export class TaskItem extends React.Component {
    constructor(){
        super();
        this.DeleteTask = this.DeleteTask.bind(this);
    }
    // Method used in delete button 
    DeleteTask(e){
        e.preventDefault();

        axios.delete('http://localhost:4000/api/task/'+this.props.task._id)
        .then((res)=>{this.props.Reload();})
        .catch();
    }
    
    // Layout of task items in the list
    render() {
        return (
            <div id="taskList">


                <Card>
                    <Card.Header><h1>{this.props.task.title}</h1><h2>Due date: {this.props.task.dueDate}</h2></Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <p>Description: {this.props.task.description}</p>
                            
                            <h2>Priority: {this.props.task.priority}</h2>
                            
                            <footer >
                                <h2>Status: {this.props.task.status}</h2>
                                <h2>Category: {this.props.task.tags}</h2>
                            </footer>
                        </blockquote>
                    </Card.Body>
                    <Link to={'/edit/' + this.props.task._id} className="btn btn-primary">Edit</Link>
                    <Button variant="danger" onClick={this.DeleteTask}>Delete</Button>
                </Card>
                <br></br>
            </div>
        );
    }
}