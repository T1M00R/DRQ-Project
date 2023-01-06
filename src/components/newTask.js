import React from "react";
import axios from "axios";

export class NewTask extends React.Component {

    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeTaskTitle = this.onChangeTaskTitle.bind(this);
        this.onChangeTaskDescription = this.onChangeTaskDescription.bind(this);
        this.onChangeTaskDueDate = this.onChangeTaskDueDate.bind(this);
        this.onChangeTaskPriority = this.onChangeTaskPriority.bind(this);
        this.onChangeTaskStatus = this.onChangeTaskStatus.bind(this);
        this.onChangeTaskTags = this.onChangeTaskTags.bind(this);


        
        this.state = {
            title:'',       
            description:'',
            dueDate:'',
            priority: '',  
            status: '',     
            tags: ''       
        }
    }

    handleSubmit(e){
        e.preventDefault();
        console.log(`Button clicked 
        ${this.state.title},        
        ${this.state.description},
        ${this.state.dueDate}
        ${this.state.priority}
        ${this.state.status}
        ${this.state.tags}
        
        `);

        const task ={
            title:this.state.title,
            description:this.state.description,
            dueDate:this.state.dueDate,
            priority:this.state.priority,
            status:this.state.status,
            tags:this.state.tags
        }

        axios.post('http://localhost:4000/api/tasks',task)
        .then()
        .catch();

        this.setState({
            title:'',      
            description:'',
            dueDate:'',
            priority: '',  
            status: '',    
            tags: ''      
        })
    }

    onChangeTaskTitle(e){
        this.setState({
            title:e.target.value
        })
    }
    onChangeTaskDescription(e){
        this.setState({
            description:e.target.value
        })
    }
    onChangeTaskDueDate(e){
        this.setState({
            dueDate:e.target.value
        })
    }
    onChangeTaskPriority(e){
        this.setState({
            priority:e.target.value
        })
    }
    onChangeTaskStatus(e){
        this.setState({
            status:e.target.value
        })
    }
    onChangeTaskTags(e){
        this.setState({
            tags:e.target.value
        })
    }

    render() {
        return (
            // Use ID for css styling
            
            <div id="newTaskForm">   

                <div>
                    <h3>Create a new task!</h3>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                        <br></br>
                            <label>Add Task Title: </label>
                            <input type="text"
                                className="form-control"
                                value={this.state.title}
                                onChange={this.onChangeTaskTitle}
                            />
                        </div>

                        <div className="form-group">
                        <br></br>
                            <label>Add Task Description: </label>
                            <input type="text"
                                className="form-control"
                                value={this.state.description}
                                onChange={this.onChangeTaskDescription}
                            />
                        </div>

                        <div className="form-group">
                        <br></br>
                            <label>Add Due Date: </label>
                            <input type="text"      // change to date
                                className="form-control"
                                value={this.state.dueDate}
                                onChange={this.onChangeTaskDueDate}
                            />
                        </div>

                        <div className="form-group">
                        <br></br>
                            <label>Add Priority: </label>
                            <input type="text"      // change to number
                                className="form-control"
                                value={this.state.priority}
                                onChange={this.onChangeTaskPriority}
                            />
                        </div>

                        <div className="form-group">
                        <br></br>
                            <label>Add Status: </label>
                            <input type="text"      
                                className="form-control"
                                value={this.state.status}
                                onChange={this.onChangeTaskStatus}
                            />
                        </div>

                        <div className="form-group" >
                        <br></br>
                            <label>Add Tag: </label>
                            <input type="text"     
                                className="form-control"
                                value={this.state.tags}
                                onChange={this.onChangeTaskTags}
                            />
                        </div>
                        <br></br>
                        <input type="submit" value="Add task" />
                    </form>
                </div>

            </div>
        );
    }
}

// Fields to change to
    // -------------------
    // title: String,       
    // description: String,
    // dueDate: String,
    // priority: Integer,   
    // status: String,      
    // tags: String,        