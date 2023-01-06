import React from "react";
import Card from 'react-bootstrap/Card';
import Button  from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import axios from "axios";

export class taskItem extends React.Component {
    constructor(){
        super();
        this.Deletetask = this.Deletetask.bind(this);
    }
    Deletetask(e){
        e.preventDefault();

        axios.delete('http://localhost:4000/api/task/'+this.props.task._id)
        .then((res)=>{this.props.Reload();})
        .catch();
    }
    render() {
        return (
            <div>

                <Card>
                    <Card.Header>{this.props.task.title}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            {/* // Fields to change to
                                // -------------------
                                // title: String,       
                                // description: String,
                                // dueDate: String,
                                // priority: Integer,   
                                // status: String,      
                                // tags: String,         
                            */}
                            <img src={this.props.task.cover}></img> 
                            <footer >
                                {this.props.task.author}
                            </footer>
                        </blockquote>
                    </Card.Body>
                    <Link to={'/edit/' + this.props.task._id} className="btn btn-primary">Edit</Link>
                    <Button variant="danger" onClick={this.Deletetask}>Delete</Button>
                </Card>
            </div>
        );
    }
}