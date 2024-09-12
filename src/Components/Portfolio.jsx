import React from 'react';
import ProjectCard from './ProjectCard';


const projects = [
    {
        image: "/image/1.jpeg",
        title: "E-commerce website ",
        description: "A short description of project one.",
        link: "https://github.com/SandeshChrestha/E-commerce-website"
    },
    {
        image: "/image/2.jpeg",
        title: "React Todo list app",
        description: "A short description of project two.",
        link: "https://github.com/SandeshChrestha/React-todo-list"
    },
    {
        image: "/image/3.jpeg",
        title: "Advance-Programming-e-commercewebsite ",
        description: "A short description of project two.",
        link: "https://github.com/SandeshChrestha/Advance-Programming-e-commercewebsite"
    },
    {
        image: "/image/4.jpeg",
        title: "Data-Analysis",
        description: "A short description of project two.",
        link: "https://github.com/SandeshChrestha/Data-Analysis-python"
    },
    {
        image: "/image/5.jpeg",
        title: "Python-Project",
        description: "A short description of project two.",
        link: "https://github.com/SandeshChrestha/Python-Project"
    },
    {
        image: "/image/6.jpeg",
        title: "React-Weather-app",
        description: "A short description of project two.",
        link: "https://github.com/SandeshChrestha/React-Weather-app"
    },

    // Add more projects as needed
];

const skills = [
    { name: 'JavaScript', level: '80%' },
    { name: 'React', level: '50%' },
    { name: 'CSS', level: '70%' },
    { name: 'Node.js', level: '50%' },
    // Add more skills as needed
];

const Portfolio = () => {
    return (
        <section id="projects" className="py-12 bg-white">
            {/* Profile Section */}
            <div className="container mx-auto px-20 flex flex-col md:flex-row items-center mb-12 space-y-8 md:space-y-0 md:space-x-8">
                {/* About Me Section */}
                <div className="md:w-1/2 text-center md:text-left md:pr-8 mb-8 md:mb-0">
                    <h2 className="text-3xl font-bold mb-4">About Me</h2>
                    <p className="text-gray-700 leading-relaxed">
                        I'm Sandesh Shrestha, a passionate developer with experience in building responsive web applications.
                        I love working with modern technologies and creating efficient solutions. My goal is to leverage
                        my skills to make a positive impact through technology. 
                    </p>
                </div>

                {/* Profile Photo */}
                <div className="md:w-1/2 flex justify-center md:justify-end">
                    <img
                        src="/image/sandesh.JPG" // Replace with your actual photo URL
                        alt="Your Name"
                        className="w-48 h-48 md:w-64 md:h-64 rounded-full shadow-lg object-cover"
                    />
                </div>
            </div>

            {/* Skills Section */}
            <div className="container mx-auto px-40 mb-12">
                {/* Centering Title */}
                <div className="flex justify-center mb-8">
                    <h2 className="text-3xl font-serif text-center py-3 px-6 border text-white bg-zinc-900 rounded">
                        My Skills
                    </h2>
                </div>
                <div className="space-y-4">
                    {skills.map((skill, index) => (
                        <div key={index}>
                            <div className="flex justify-between mb-1">
                                <span className="text-lg font-medium">{skill.name}</span>
                                <span className="text-sm text-gray-600">{skill.level}</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-4">
                                <div
                                    className="bg-blue-600 h-4 rounded-full"
                                    style={{ width: skill.level }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            {/* Portfolio Section */}
            <div className="container mx-auto px-4">
                <div className="flex justify-center mb-8">
                    <h2 className="text-3xl font-serif text-center mb-8 inline-block py-3 px-6 border text-white bg-zinc-900 rounded">
                        My Projects
                    </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            image={project.image}
                            title={project.title}
                            description={project.description}
                            link={project.link}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;