
const gamblerName = "Gambler Name"
let buttonText = "Login"


const RingsListHandler = () =>{
    return(
    <>
        <div className="h-20 w-full bg-seafoam">
            <div className="h-10 w-full">
                <input type="text" placeholder={gamblerName} className="text-sm rounded-md m-1 p-1"/>
                <button className="bg-blue text-white text-sm my-1 p-1 rounded-md">Update</button>
                <button className="bg-blue text-white text-sm m-1 p-1 rounded-md absolute right-0">{buttonText}</button>
            </div>
            <div className="h-10 w-full">
                <button className="bg-blue text-white text-sm m-1 p-1 rounded-md">Create Group</button>
                <button className="bg-blue text-white text-sm my-1 p-1 rounded-md">Join Group</button>
            </div>
        </div>
    </>
    )
}

export default RingsListHandler;