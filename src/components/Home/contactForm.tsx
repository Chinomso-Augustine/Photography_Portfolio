
import { useState } from "react";

function ContactForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });

    const HandleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (

        <div>
            <section className="py-50 bg-gradient-to-b from-purple-200 via-yellow-100 to-purple-100 h-screen">

            <div className="text-center text-purple-900 font-sans my-7">
                    <h1 className="text-4xl md:text-5xl font-bold ">
                     Contact Form
                    </h1>
                    <p className="p-2 text-purple-900 text-lg">Want to get in touch? Fill out this form</p>
                </div>
                
                <form className="bg-purple-900 p-6 rounded-lg shadow-lg max-w-3xl mx-auto max-h-3xl h-[50vh]"
                    onSubmit={async (e) => {
                        e.preventDefault();
                        const response = await fetch("https://formspree.io/f/xblkoabw", {
                            method: "POST",
                            headers: {
                                Accept: "application/json",
                            },
                            body: new FormData(e.target as HTMLFormElement),
                        });

                        if (response.ok) {
                            alert("Form submitted successfully!");
                            (e.target as HTMLFormElement).reset(); // clear the form
                        } else {
                            alert("Oops! Something went wrong. Try Again");
                        }
                    }}

                >
                    <div className="flex flex-wrap gap-4">
                        <input
                            type="text"
                            placeholder="First Name"
                            name="firstName"
                            required onChange={HandleChange}
                            className="bg-amber-100  text-blue-900  p-3 rounded w-full md:flex-1" />

                        <input type="text"
                            placeholder="Last Name"
                            name="lastName"
                            required
                            onChange={HandleChange}
                            className="bg-amber-100 p-3  text-blue-900 rounded w-full md:flex-1" />
                    </div>

                    <div className="flex flex-wrap gap-4 mt-6">
                        <input type="email"
                            placeholder="Email"
                            name="email"
                            required
                            onChange={HandleChange}
                            className="bg-amber-100 p-3 text-blue-900   rounded w-full md:flex-1" />
                    </div>

                    <div className="flex flex-wrap gap-4 mt-6">
                        <textarea placeholder="Message"
                            rows={5} name="message"
                            onChange={HandleChange}
                            required
                            className="bg-amber-100 text-blue-900 p-3 rounded w-full md:flex-1"></textarea>
                    </div>
                    <input type="submit" value="Submit" required className="bg-blue-600 text-white font-semibold py-2 px-6 rounded hover:bg-blue-800 cursor-pointer mt-6" />
                </form>
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
};

export default ContactForm; 