import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Edit function to edit selected task
export function Edit(){
    let {id} = useParams(); // get id of task to edit from params
    const [title, setTitle] = useState('');  
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [priority, setPriority] = useState('');
    const [status, setStatus] = useState('');
    const [tags, setTags] = useState('');

    // Accepts a function that contains imperative, possibly effectful code.
    useEffect(()=>{
        axios.get('http://localhost:4000/api/task/'+id)
        .then((response)=>{
            setTitle(response.data.title);      
            setDescription(response.data.description);
            setDueDate(response.data.dueDate);
            setPriority(response.data.priority);
            setStatus(response.data.status);
            setTags(response.data.tags);
        })
        .catch()
    },[]);

    // When button is pressed, submit form
    const handleSubmit = (e)=>{
        e.preventDefault();

        const editTask = {
            title:title,                        
            description:description,
            dueDate:dueDate,
            priority:priority,
            status:status,
            tags:tags
        }

        axios.put('http://localhost:4000/api/task/'+id,editTask)
        .then()
        .catch();
    }

    // Render form to edit tasks
    return(
        <div id="editTaskForm">
            <h3>Edit task component</h3>
            <form onSubmit={handleSubmit}>
            <div className="form-group">
                {/* Change the label and values also to edit tasks */}
                <br></br>
                        <label>Edit task Title: </label>        
                        <input type="text"
                            className="form-control"
                            value={title}
                            onChange={(e)=>{setTitle(e.target.value)}}
                        />
                    </div>
                    <div className="form-group">
                    <br></br>
                        <label>Edit task description: </label>                  
                        <input type="text"                                     
                            className="form-control"
                            value={description}                                 
                            onChange={(e)=>{setDescription(e.target.value)}}    
                        />
                    </div>
                    <div className="form-group">
                    <br></br>
                        <label>Edit task due date: </label>
                        <input type="date"
                            className="form-control"
                            value={dueDate}
                            onChange={(e)=>{setDueDate(e.target.value)}}
                        />
                    </div>
                    <div className="form-group">
                    <br></br>
                        <label>Edit task priority: </label>
                        <input type="number"
                            className="form-control"
                            value={priority}
                            onChange={(e)=>{setPriority(e.target.value)}}
                        />
                    </div>
                    <div className="form-group">
                    <br></br>
                        <label>Edit task status: </label>
                        <input type="text"
                            className="form-control"
                            value={status}
                            onChange={(e)=>{setStatus(e.target.value)}}
                        />
                    </div>
                    <div className="form-group">
                    <br></br>
                        <label>Edit task category: </label>
                        <input type="text"
                            className="form-control"
                            value={tags}
                            onChange={(e)=>{setTags(e.target.value)}}
                        />
                    </div>
                    <br></br>
                <input type="submit" value="Edit task" id="button"></input>
            </form>
        </div>
    );
}