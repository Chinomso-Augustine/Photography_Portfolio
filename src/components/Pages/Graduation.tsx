import * as React from "react";

//1. Import all soccer images as object
import { GradArray } from "../Images/Graduation/imageImporter.tsx";

function Grad() {

    //2. Convert object into array 
    const pics = GradArray;


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

export default Grad; 