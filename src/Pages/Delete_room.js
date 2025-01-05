import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Delete_room(){
    const [record,setRecord] = useState([]);
    const Navigate = useNavigate();

    useEffect(() => {
        getData();
    },[])

    // var reqData,resData;
    const getData = async()=> {
        const reqData = await fetch("http://localhost/park-paradise/room.php");
        const resData = await reqData.json();
        // console.log(resData);
        setRecord(resData);
        console.log(record);
    }

    return (
        <>
        <table>
            <tr>
                <th>ID</th>
                <th>Type</th>
                <th>Number of People</th>
                <th>Number of Rooms</th>
                <th></th>
                <th></th>
            </tr>
            {
                record.map((udata,index)=>(
                    <tr key={index}>
                        <td>{udata.ID}</td>
                        {/* <td>{udata.Name}</td> */}
                        {/* <td>{udata.Date}</td> */}
                        <td>{udata.Type}</td>
                        <td>{udata["Number Of People"]}</td>
                        <td>{udata["Number Of Rooms"]}</td>
                        {/* <td>{udata.Adults}</td> */}
                        {/* <td>{udata.Children}</td> */}
                        {/* <td>{udata.Status}</td> */}
                        {/* <td><button>Free</button></td> */}
                        <td><button>Edit</button></td>
                        <td><button>Delete</button></td>
                    </tr>
                ))
            }
        </table>
        </>
    );
}
export default Delete_room;