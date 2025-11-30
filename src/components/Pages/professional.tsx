//1. Import all soccer images as object
import { ProfArray } from "../Images/Professional/imageImporter";

function Prof() {

    //2. Convert object into array 
    const pics = ProfArray;


    return (
        <div className="pt-20 h-auto bg-gray-200">
            <div className=" border border-red-400 grid grid-cols-3 gap-1 ">
                {pics.map((img, index) => (
                    <img src={img} className="w-full h-auto m-full object-fit " />
                ))}
            </div>
        </div>
    );
}

export default Prof; 