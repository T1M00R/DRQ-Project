import React from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export class MainContent extends React.Component {

    
    // Render the home page
    render() {


        // const [date, setDate] = useState(new Date());
        return (

            
            <div>
                <div>
                    <h1>Welcome to my Task Management app!</h1>
                    <h2>It is {new Date().toLocaleTimeString()}.</h2>
                    
                    <br></br>
                    <br></br>
                    
                    <p>This tool will help you manage your tasks. It's been designed by a lazy person, for lazy people. We know that it's hard to do what you're supposed to. 
                    <br></br>So it's our mission to help keep everybody on track. Lazy and organized people alike! 
                    <br></br>Speaking from personal experience, everybody needs a task management tool. 
                    </p>

                    
                </div>
                {/* React calendar */}
                <h1 className='text-center'>Calendar</h1>
                <div className='calendar'>
                   
                    <div className='calendar-container'>
                        <Calendar />
                    </div>
                    <p className='text-center'>
                    <span className='bold'></span>{' '}
                    {/* {date.toDateString()} */}
                    </p>
                </div>
                
            </div>
            
        );
    }
}