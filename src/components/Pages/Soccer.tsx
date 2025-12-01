//1. Import all soccer images as object
import { soccerImg } from "../Images/SoccF/index"

function Sports() {

    const pics = soccerImg;

    return (

        <div className="pt-20 bg-green-100">
            <div className="grid grid-cols-4 gap-1">
                {pics.map((img, index) => (

                    <img src={img} className=" w-full h-auto object-cover" />

                ))}
            </div>
        </div>
    );
}

export default Sports; 