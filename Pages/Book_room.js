import { useState } from "react";
import axios from "axios";
function Book_room(){
    const [inputs,setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values,[name]:value}));
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        // console.log(inputs);
        axios.post("http://localhost/park-paradise/bookings.php",inputs);
    }

    return (
        <form onSubmit={handleSubmit} method="post">
            <label>Name: </label>
            <input type="text" name="name" onChange={handleChange}/><br />
            <label>Date: </label>
            <input type="date" name="date" onChange={handleChange}/><br />
            <label>Number of Rooms: </label>
            <input type="number" name="rooms" onChange={handleChange}/><br />
            <label>Type of Room: </label>
            <select name="type" onChange={handleChange}>
                    <option value="">Select</option>
                    <option value="normal">Normal Room</option>
                    <option value="suite">Suite Room</option>
                </select><br/>
            <label>Number of Adults: </label>
            <input type="number" name="adults" onChange={handleChange}/><br />
            <label>Number of Children: </label>
            <input type="number" name="children" onChange={handleChange}/><br />
            <input type="submit"/>
        </form>
    );
}
export default Book_room;