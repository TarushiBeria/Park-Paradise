import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

function Edit_booking(){
    const nvigate = useNavigate();
    const {id} = useParams();

    const [formvalue,setFormvalue] = useState({name: "", email: "",password: ""});
    const [message,setMessage] = useState('');
    const [record,setRecord] = useState([]);

    const handleInput = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        setFormvalue({...formvalue,[name]:value});
    }

    useEffect(() => {
        const getData = async()=> {
            var urii = "http://localhost/park-paradise/Bookings.php/"+id;
            // console.log(urii);
            const reqData = await fetch(urii);
            const resData = await reqData.json();
            // console.log(resData);
            setRecord(resData);
            console.log(record);
        }
        getData();
    },[])
    return(
        <h1>Edit</h1>
    );
}
export default Edit_booking;