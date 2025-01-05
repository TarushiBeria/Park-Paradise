import { useState } from "react";
import axios from "axios";

function Add_room(){
    const [inputs,setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]:value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post("http://localhost/park-paradise/room.php",inputs)
        // console.log(inputs);
    }

    return(
        <>
            <form onSubmit={handleSubmit} method="post">
                <label>Enter the type of the room: </label>
                <select name="type" onChange={handleChange}>
                    <option value="">Select</option>
                    <option value="normal">Normal Room</option>
                    <option value="suite">Suite Room</option>
                </select><br/>
                <label>Number of people: </label>
                <input type="number" name="number" onChange={handleChange}/>
                <label>Number of rooms: </label>
                <input type="number" name="rooms" onChange={handleChange}/>
                <input type="submit"/>
            </form>
        </>
    );
}
export default Add_room;