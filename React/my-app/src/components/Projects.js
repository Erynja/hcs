import React from 'react';
import project1Image from '../images/1.png';
import project2Image from '../images/2.png';
import project3Image from '../images/3.png';
import project4Image from '../images/4.png';
import project5Image from '../images/5.jpg';


const Projects = () => {
    return (
        <div className="min-h-screen bg-base-200 p-6">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-5xl font-bold text-center mb-12 bg-black text-primary">My Projects</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Project 1 */}
                    <div className="card bg-black text-white shadow-xl">
                        <figure>
                            <img src={project1Image} alt="Project 1" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Neon City VR</h2>
                            <p>A virtual reality experience set in a futuristic neon-lit cityscape.</p>
                        </div>
                    </div>

                    {/* Project 2 */}
                    <div className="card bg-black text-white shadow-xl">
                        <figure>
                            <img src={project2Image} alt="Project 2" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Pixel Art Studio</h2>
                            <p>An online platform to create and share pixel art with a global community.</p>
                        </div>
                    </div>

                    {/* Project 3 */}
                    <div className="card bg-black text-white shadow-xl">
                        <figure>
                            <img src={project3Image} alt="Project 3" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Retro Arcade Hub</h2>
                            <p>A collection of classic arcade games with a modern twist, available on web and mobile.</p>
                        </div>
                    </div>

                    {/* Project 4 */}
                    <div className="card bg-black text-white shadow-xl">
                        <figure>
                            <img src={project4Image} alt="Project 4" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">AI Art Generator</h2>
                            <p>A machine learning tool that generates unique artwork based on user inputs.</p>
                        </div>
                    </div>

                    {/* Project 5 */}
                    <div className="card bg-black text-white shadow-xl">
                        <figure>
                            <img src={project5Image} alt="Project 5" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Solar System Explorer</h2>
                            <p>An interactive 3D model of the solar system with educational content for all ages.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;

