import Footer from "../Common/Footer";

function About() {
    return (
        <div className=' bg-gradient-to-tr from-purple-200 via-yellow-50 to-purple-200 min-h-screen'>

            <div className='py-10 text-center font-bold text-4xl text-purple-900'>About Me</div>
            <div className="max-w-5xl mx-auto px-4">
                <section className='flex flex-col lg:flex-row items-center justify-center py-8 gap-8 h-auto'>

                    {/**photo first on stacked layouts */}
                    <div className='w-full lg:w-1/2 rounded-2xl overflow-hidden flex items-center justify-center'>
                        <img
                            src="/images/Profile.JPG"
                            srcSet="/images/Profile.JPG 1x, /images/Profile.JPG 2x"
                            sizes="(min-width: 1024px) 50vw, 100vw"
                            alt="Head shot - photo by Chinomso Augustine"
                            className="w-full h-full object-cover rounded-2xl"
                            style={{ minHeight: 280 }}
                            loading="eager"
                        />
                    </div>

                    <div className="w-full lg:w-1/2 p-6 rounded-2xl">
                        <h1 className="text-2xl font-bold mb-4 text-purple-950">About Chinomso</h1>

                        <p className="mb-4">
                            Chinomso Augustine is a 3rd-year Computer Science
                            student at UC Davis with a strong interest in front-end and design.
                            Alongside his studies, he has developed a deep passion for photography as a way
                            to capture and share meaningful stories.
                        </p>
                        <p>
                            Chinomso enjoys photography skills includes sports, graduations, portraits, nature and other forms. To him, every picture is more than
                            just an image; it is a memory worth preserving. He believes that every moment
                            counts, and his goal is to create photos that allow people to relive those
                            experiences for years to come.
                        </p>
                    </div>
                </section>

                <Footer />

            </div>
        </div>
    );
}

export default About;