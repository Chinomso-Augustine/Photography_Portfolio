import BgPic from "./Chicago-CkhXL9rw.JPG";

function About() {
    return (
        <div className=' bg-gradient-to-tr from-purple-200 via-yellow-50 to-purple-200 h-screen'>

            <div className='py-30 text-center font-mono font-bold text-5xl text-purple-900'>About Me</div>
            <section className='flex justify-center py-20 gap-10 h-auto'>

                {/**background images  */}
                <div className='w-lg bg-contain py-40 rounded-2xl'
                    style={{
                        backgroundImage: `url(${BgPic})`,
                        backgroundSize: "100%",
                        backgroundPosition: "center"
                    }}>

                </div>

                <div className="w-full md:w-1/2 p-6 rounded-2xl">
                    <h1 className="text-2xl font-bold mb-4 text-purple-950">About Chinomso</h1>

                    <p className="mb-4">
                        Chinomso Augustineis a 3rd-year Computer Science
                        student at UC Davis with a strong interest in front-end development and design.
                        Alongside his studies, he has developed a deep passion for photography as a way
                        to capture and share meaningful stories.
                    </p>
                    <p>
                        Chinomso enjoys photographing sports, graduations, portraits, nature and other forms. To him, every picture is more than
                        just an image; it is a memory worth preserving. He believes that every moment
                        counts, and his goal is to create photos that allow people to relive those
                        experiences for years to come.
                    </p>
                </div>
            </section>

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

        </div>
    )
}

export default About; 