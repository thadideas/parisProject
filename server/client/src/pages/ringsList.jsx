import RingCard from "../components/ringCard";
import RingsListHandler from "../components/ringsListHandler";

const listofrings = [1,2,3,4,5,6,7]

const RingsList = () =>{
    return (<>
        <div className = "bg-silver w-full mt-16 absolute">
            <RingsListHandler/>
            <div className = "static">
                {listofrings.map((el)=>(
                    <RingCard/>
                ))}
            </div>
        </div>
    </>)
}

export default RingsList;