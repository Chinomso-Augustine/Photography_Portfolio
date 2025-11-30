
//1. Import all soccer images as object
import { FArray } from "../Images/FootBall/imageImporter";

function FootBall() {

    //2. Convert object into array 
    const pics = FArray;


    return (
        <div className="pt-20 h-auto bg-blue-300">
            <div className=" border border-red-400 grid grid-cols-3 gap-1 ">
                {pics.map((img, index) => (
                    <img src={img} className="w-full h-auto m-full object-fit " />
                ))}
            </div>
        </div>
    );
}

export default FootBall; 