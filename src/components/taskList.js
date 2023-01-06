import React from "react";
import { tasks } from "./tasks";
import axios from "axios";

export class TaskList extends React.Component {
    constructor() {
        super();
        this.componentDidMount = this.componentDidMount.bind(this);
    }
   
    componentDidMount() {
        axios.get('http://localhost:4000/api/tasks')
            .then((response) => {
                this.setState({ tasks: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    state = {
        tasks: []
    }

    render() {
        return (
            <div>
                <h3>This is where all the tasks go!</h3>
                <tasks tasks={this.state.tasks} Reload={this.componentDidMount}></tasks>
            </div>
        );
    }
}