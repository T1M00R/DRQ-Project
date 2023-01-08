import React from "react";
import { Tasks } from "./tasks";
import axios from "axios";

export class TaskList extends React.Component {
    constructor() {
        super();
        this.componentDidMount = this.componentDidMount.bind(this);
    }
   
    // If component mounted, get api/tasks using axios
    componentDidMount() {
        axios.get('http://localhost:4000/api/tasks')
            .then((response) => {
                this.setState({ tasks: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    // State is set to tasks above
    state = {
        tasks: []
    }

    render() {
        return (
            <div>
                <h3>This is where all the tasks go!</h3>
                <Tasks tasks={this.state.tasks} Reload={this.componentDidMount}></Tasks>
            </div>
        );
    }
}