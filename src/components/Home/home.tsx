"use client";
import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import * as SamplePics from "../Images/Pictures";
import { Link } from "react-router-dom"


//sample images for cover page
import {GradArray} from "../Images/Graduation/imageImporter" //Grda
import {soccerImg} from '../Images/Soccer/imageImporter'
import { BK } from "../Images/Basketball/imageImporter"; //Basketball
import { VArray } from "../Images/VolleyBall/imageImporter"; //Volleyball
import { FArray } from "../Images/FootBall/imageImporter"; //Football
import {ProfArray} from "../Images/Proffessional/imageImporter"

function Home() {
    // Turn image object into usable array of { value, img }
    {/**Declaring type of img object first  */ }

    type ImageItem = {
        value: string;
        img: string;
    };

    {/**Tells image to use imageitem format  */ }
    const Images: ImageItem[] = Object.entries(SamplePics).map(([name, img]) => ({
        value: name,
        img: img as string, /**typescript expect image to be unknown so specified it explicitly as string cuz that's what I want */
    }));

    const autoplayPlugin = React.useRef(
        Autoplay({ delay: 4000, stopOnInteraction: false })
    );


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
           
            {/* Photography */}
            <section className="bg-gradient-to-b from-purple-200 to-white py-16 flex flex-col justify-center items-center overflow-auto">


                <div className="flex justify-center w-full px-4">
                    <Carousel plugins={[autoplayPlugin.current]} className="w-full max-w-5xl h-full max-h-5xl border m-12">
                        <CarouselContent>
                            {Images.map((image, index) => (
                                <CarouselItem key={index} className="basis-1/2 md:basis-1/2 lg:basis-1/3 p-2 ">
                                    <Card className="h-[530px] flex flex-col justify-between">

                                        <CardContent className="flex items-center justify-center flex-grow">
                                            <img
                                                src={image.img}
                                                className="w-full h-full object-cover rounded-md text-center"
                                                alt={image.value}
                                            />
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
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
