import React from 'react';

const Contact = () => {
  return (
    <section className="py-12 bg-zinc-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <p className="mb-6">Feel free to reach out if you're interested in working with me or have any questions.</p>
        <p className="mb-6">+977 9851310048</p>
        
        <div className="mt-8 flex justify-center space-x-4">
          <a href="https://www.instagram.com/_sandeshshrestha/" target="_blank" rel="noopener noreferrer">
            <svg className="w-6 h-6 text-white hover:text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <circle cx="12" cy="12" r="3"></circle>
              <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/sandesh101/" target="_blank" rel="noopener noreferrer">
            <svg className="w-6 h-6 text-white hover:text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 1 1-12 0 6 6 0 0 1 12 0zM20 20v-6a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v6"></path>
            </svg>
          </a>
          <a href="https://github.com/SandeshChrestha" target="_blank" rel="noopener noreferrer">
            <svg className="w-6 h-6 text-white hover:text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2a10 10 0 0 0-3.16 19.5c.5.1.68-.21.68-.47v-1.73c-2.69.59-3.26-1.31-3.26-1.31-.44-1.12-1.08-1.42-1.08-1.42-.88-.6.07-.59.07-.59 1.03.07 1.56 1.07 1.56 1.07.92 1.57 2.41 1.12 3 1.09.09-.67.36-1.12.65-1.37-2.3-.26-4.7-1.16-4.7-5.16 0-1.14.4-2.07 1.06-2.81-.11-.26-.46-1.3.1-2.71 0 0 .85-.27 2.8 1.07a9.66 9.66 0 0 1 2.56-.34c.87.01 1.74.12 2.56.34 1.95-1.34 2.8-1.07 2.8-1.07.56 1.41.21 2.45.1 2.71.66.74 1.06 1.67 1.06 2.81 0 4-2.4 4.41-4.71 4.67.36.31.68.93.68 1.88v2.81c0 .27.18.58.69.48A10 10 0 0 0 12 2z"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
