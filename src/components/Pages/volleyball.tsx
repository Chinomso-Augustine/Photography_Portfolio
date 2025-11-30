
//1. Import all soccer images as object
import { VArray } from "../Images/VollF/vollImport"

function VBall() {

    //2. Convert object into array 
    const pics = Object.values(VArray);


    return (
        <div className="pt-20 h-auto bg-yellow-100">
            <div className=" border border-red-400 grid grid-cols-3 gap-1 ">
                {pics.map((img, index) => (
                    <img src={img} className="w-full h-auto m-full object-fit " />
                ))}
            </div>
        </div>
    );
}

export default VBall; 