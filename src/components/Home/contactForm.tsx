
import { useState } from "react";
import Footer from "../Common/Footer";

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
            <section className="py-12 bg-gray-50 min-h-screen">

                <div className="max-w-5xl mx-auto px-4">
                    <div className="text-center text-purple-900 my-7">
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
                </div>
            </section>

            <Footer />
        </div>
    )
};

export default ContactForm; 