
//1. Import all soccer images as object
import { BK } from "../Images/BaskF/bkImport"

function BasketBall() {

    //2. Convert object into array 
    const pics = BK;


    return (
        <div className="pt-20 bg-white">
            <div className=" border border-red-400 grid grid-cols-3 gap-1 ">
                {pics.map((img, index) => (
                    <img src={img} className="w-full h-auto m-full object-fit " />
                ))}
            </div>
        </div>
    );
}

export default BasketBall; 