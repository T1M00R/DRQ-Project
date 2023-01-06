import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


// Fields to change to
    // -------------------
    // title: String,       
    // description: String,
    // dueDate: String,
    // priority: Integer,   
    // status: String,      
    // tags: String,        


export function Edit(){
    let {id} = useParams();
    const [title, setTitle] = useState(''); // Change these to fit the fields 
    const [cover, setCover] = useState('');
    const [author, setAuthor] = useState('');

    useEffect(()=>{
        axios.get('http://localhost:4000/api/task/'+id)
        .then((response)=>{
            setTitle(response.data.title);      // Change to above fields also
            setCover(response.data.cover);
            setAuthor(response.data.author);
        })
        .catch()
    },[]);

    const handleSubmit = (e)=>{
        e.preventDefault();

        const edittask = {
            title:title,                        // Change 
            cover:cover,
            author:author
        }

        axios.put('http://localhost:4000/api/task/'+id,edittask)
        .then()
        .catch();
    }

    return(
        <div>
            <h3>Edit task component</h3>
            <form onSubmit={handleSubmit}>
            <div className="form-group">
                {/* Change the label and values also to edit tasks */}
                        <label>Edit task Title: </label>        
                        <input type="text"
                            className="form-control"
                            value={title}
                            onChange={(e)=>{setTitle(e.target.value)}}
                        />
                    </div>
                    <div className="form-group">
                        <label>Edit task Cover: </label>
                        <input type="text"
                            className="form-control"
                            value={cover}
                            onChange={(e)=>{setCover(e.target.value)}}
                        />
                    </div>
                    <div className="form-group">
                        <label>Edit task Author: </label>
                        <input type="text"
                            className="form-control"
                            value={author}
                            onChange={(e)=>{setAuthor(e.target.value)}}
                        />
                    </div>
                <input type="submit" value="Edit task"></input>
            </form>
        </div>
    );
}