import * as React from "react";
import { Link } from "react-router-dom";
import { homePics } from "../Images/Pictures/index"

//sample images for cover page
import { GradArray } from "../Images/GradF" //Grda
import { soccerImg } from '../Images/SoccF'
import { BK } from "../Images/BaskF"; //Basketball
import { VArray } from "../Images/VollF"; //Volleyball
import { FArray } from "../Images/FootBall"; //Football
import { ProfArray } from "../Images/ProfF"
import { } from "../Images/Pictures";

function Home() {
    return (
        <div>
            <section className="py-30 z-60 bg-gradient-to-bl from-purple-800 via-purple-800 to-indigo-800">
                <div className="text-center text-purple-100 font-sans ">
                    <h1 className="text-5xl md:text-7xl font-bold ">
                        Chinomso Augustine
                    </h1>
                </div>

            </section>

            {/*Selections*/}

            <section className="grid-cols-6 h-auto ">

                {/**grad and professional */}
                <div className=" flex justify-center h-auto m-7 gap-3 ">

                    <div className=" w-full text-center h-auto relative overflow-hidden cursor-pointer">
                        <img src={GradArray[2]} className=" w-full object-cover lg:h-90 md:h-60  sm:h-20 rounded-xl " />

                        <Link
                            to="/Graduation"
                            className=" absolute inset-0 text-3xl flex items-center text-white justify-center bg-black/40 rounded-xl hover:text-yellow-200">
                            Graduations
                        </Link>
                    </div>
                    <div className=" w-full text-center h-auto relative overflow-hidden cursor-pointer">
                        <img src={ProfArray[10]} className=" w-full object-cover lg:h-90 md:h-60  sm:h-20 rounded-xl " />

                        <Link
                            to="/Professional"
                            className=" absolute inset-0 text-3xl flex items-center text-white justify-center bg-black/40 rounded-xl hover:text-gray-400">
                            Professional
                        </Link>
                    </div>


                </div>

                {/**Soccer and basketball */}

                <div className=" flex justify-center h-auto m-7 gap-3 ">

                    <div className=" w-full text-center h-auto relative overflow-hidden cursor-pointer">
                        <img src={soccerImg[39]} className=" w-full object-cover lg:h-90 md:h-60  sm:h-20 rounded-xl " />

                        <Link
                            to="/Soccer"
                            className=" absolute inset-0 text-3xl flex items-center text-white justify-center bg-black/40 rounded-xl hover:text-blue-900">
                            Soccer
                        </Link>
                    </div>

                    <div className=" w-full text-center h-auto relative overflow-hidden cursor-pointer">
                        <img src={BK[7]} className=" w-full object-cover lg:h-90 md:h-60  sm:h-20 rounded-xl " />

                        <Link
                            to="/Basketball"
                            className=" absolute inset-0 text-3xl flex items-center text-white justify-center bg-black/40 rounded-xl hover:text-black">
                            Basketball
                        </Link>
                    </div>
                </div>

                {/**Volleyball and Football */}
                <div className=" flex justify-center h-auto m-7 gap-3 ">

                    <div className=" w-full text-center h-auto relative overflow-hidden cursor-pointer">
                        <img src={VArray[0]} className=" w-full object-cover lg:h-90 md:h-60  sm:h-20 rounded-xl " />

                        <Link
                            to="/VolleyBall"
                            className=" absolute inset-0 text-3xl flex items-center text-white justify-center bg-black/40 rounded-xl hover:text-blue-800">
                            Volleyball
                        </Link>
                    </div>

                    <div className=" w-full text-center h-auto relative overflow-hidden cursor-pointer">
                        <img src={FArray[14]} className=" w-full object-cover lg:h-90 md:h-60  sm:h-20 rounded-xl " />

                        <Link
                            to="/FootBall"
                            className=" absolute inset-0 text-3xl flex items-center text-white justify-center bg-black/40 rounded-xl hover:text-blue-800">
                            Football
                        </Link>
                    </div>
                </div>

            </section>

            {/* Footer */}

            <footer className="bg-gradient-to-r from-purple-800 to-indigo-800 h-auto" >
                <div className="text-center font-bold text-4xl p-6 text-white">
                    <h1>Connect on social</h1>
                </div>

                <div className="text-center flex justify-center gap-4 text-purple-900 p-4">
                    <a href="https://www.instagram.com/chino_clickss/" className=" rounded-sm bg-yellow-100 h-7 text-center font-semibold w-[150px]">Instagram</a>
                    <a href="https://www.linkedin.com/in/chinomso-agwamba-augustine-ba9a29258/" className=" rounded-sm bg-yellow-100 h-7 text-center font-semibold w-[150px]">LinkedIn</a>
                </div>

                <div className="text-center w-full flex justify-center">
                    <p className=" bg-yellow-100 text-center font-semibold my-2 text-purple-900 rounded-2xl"> Created by Chinomso Augustine</p>

                </div>
            </footer >
        </div >
    );
}

export default Home;
