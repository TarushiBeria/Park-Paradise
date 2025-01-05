import Amenities from "./Amenities";
import Policies from "./Policies";
import Footer from '../Footer';
import For_stay from "./For_stay";


function Hotel_info(){
    return (
        <>
            <Amenities />
            <For_stay />
            <Policies />
            <Footer />
        </>
    );
}
export default Hotel_info;