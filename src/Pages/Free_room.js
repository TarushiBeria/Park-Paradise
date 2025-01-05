import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Free_room(){
    const [record,setRecord] = useState([]);
    const Navigate = useNavigate();

    useEffect(() => {
        getData();
    },[])

    // var reqData,resData;
    const getData = async()=> {
        const reqData = await fetch("http://localhost/park-paradise/Bookings.php");
        const resData = await reqData.json();
        // console.log(resData);
        setRecord(resData);
        // console.log(record);
    }

    return (
        <>
        <table>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Date</th>
                <th>Rooms</th>
                <th>Type</th>
                <th>Adults</th>
                <th>Children</th>
                <th>Status</th>
                <th></th>
                <th></th>
                <th></th>
            </tr>
            {
                record.map((udata,index)=>(
                    <tr key={index}>
                        {/* <td>{index + 1}</td> */}
                        <td>{udata.ID}</td>
                        <td>{udata.Name}</td>
                        <td>{udata.Date}</td>
                        <td>{udata.Rooms}</td>
                        <td>{udata.Type}</td>
                        <td>{udata.Adults}</td>
                        <td>{udata.Children}</td>
                        <td>{udata.Status}</td>
                        <td><button>Free</button></td>
                        <td><button><Link to={`${udata.ID}/edit`}>Edit</Link></button></td>
                        <td><button>Delete</button></td>
                    </tr>
                ))
            }
        </table>
        </>
    );
}
export default Free_room;