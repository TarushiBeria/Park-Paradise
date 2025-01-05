import { Outlet, Link } from "react-router-dom";
function Home_navbar(){
    function openNav() {
        document.getElementById("mySidebar").style.width = "250px";
        // document.getElementById("main").style.marginLeft = "250px";
      }
      function closeNav() {
        document.getElementById("mySidebar").style.width = "0";
        // document.getElementById("main").style.marginLeft = "0";
      }
    return (
        <>
            <div id="mySidebar" class="sidebar">
                <a href="javascript:void(0)" class="closebtn" onClick={closeNav}>&times;</a>
                <Link to="/" className="linkkk firstt">Home</Link>
                <Link to="/stay" className="linkkk">Stay</Link>
                <Link to="/restaurant" className="linkkk">Restaurant</Link>
                {/* <Link to="/hotel_info" className="linkkk">Hotel Info</Link> */}
                <Link to="/refresh" className="linkkk">Refresh</Link>
                <Link to="/event_celebration" className="linkkk">Celebration</Link>
                <Link to="/our_projects" className="linkkk">Gallery</Link>
            </div>

            <button class="openbtn" onClick={openNav} id="lines">&#9776;</button>
        </>
    );
}
export default Home_navbar;