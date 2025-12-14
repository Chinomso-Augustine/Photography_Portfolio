//1. Import all images as object
import { ProfArray } from "../Images/ProfF";

function Prof() {

    //2. Convert object into array 
    const pics = ProfArray;


    return (
        <div className="pt-20 h-auto bg-gray-200 px-4">
            <div className=" grid grid-cols-2 gap-2">
                {pics.map((img, index) => (
                    <div key={index} className="overflow-hidden rounded-lg shadow-sm hover:shadow-lg transform hover:-translate-y-0.5 transition">
                        <img src={img} className="w-full h-auto object-cover block" alt={`professional-${index}`} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Prof; 