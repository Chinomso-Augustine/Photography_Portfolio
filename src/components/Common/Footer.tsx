import React from "react";

export default function Footer() {
    return (
        <footer className="bg-gradient-to-r from-purple-800 to-indigo-900 text-white">
            <div className="max-w-5xl mx-auto py-8 px-4">
                <h2 className="text-center text-2xl font-semibold mb-4">Connect on social</h2>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
                    <a
                        href="https://www.instagram.com/chino_clickss/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Open Instagram (new tab)"
                        className="inline-flex items-center gap-3 bg-white text-purple-900 font-semibold px-5 py-2 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition focus:outline-none focus:ring-2 focus:ring-yellow-300"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-pink-500"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37a4 4 0 1 1-7.94 1.72A4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line></svg>
                        <span>Instagram</span>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/chinomso-agwamba-augustine-ba9a29258/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Open LinkedIn (new tab)"
                        className="inline-flex items-center gap-3 bg-white text-purple-900 font-semibold px-5 py-2 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition focus:outline-none focus:ring-2 focus:ring-yellow-300"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                        <span>LinkedIn</span>
                    </a>
                </div>

                <div className="text-center">
                    <p className="inline-block bg-white/10 text-white/90 px-4 py-2 rounded-full font-medium">Created by Chinomso</p>
                </div>
            </div>
        </footer>
    );
}
