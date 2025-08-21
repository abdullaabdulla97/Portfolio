import {Github} from "lucide-react" //Import a GitHub icon from lucid-react for the overlay link button

const projects = [ // Array of projects metadata rendered into cards.
    {title: "project One", // title of the card
     description:"Test project description", // description of what the project does
     image: "/Portfolio.png", // Path to the image
     technologies:["React", "JavaScript", "CSS"], // tags indicating the technology used, rendered as pills
     github:"https://github.com/yourusername/project1", // link to the project on github
    },

    {title:  "project Two",
     description: "Another test project description",
     image: "/project2.png",
     technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
     github: "https://github.com/yourusername/project2",
    },

    {title: "project Three",
     description: "Yet another test project description",
     image: "/project3.png",
     technologies: ["Vue.js", "JavaScript", "Bootstrap"],
     github: "https://github.com/yourusername/project3",
    },

    {title: "project Four", 
     description: "Final test project description",
     image: "/project4.png",
     technologies: ["Angular", "TypeScript", "Sass"],
     github: "https://github.com/yourusername/project4", 
    },
];

function Projects() { // Define the projects component
    return (
        <section id="projects" className="projects-section"> {/*Wrapper with anchorable ID for nav */}
            <div className="project-container"> {/*Container for max-width and horizontal padding*/}
                <h2 className="project-title">Projects</h2> {/*Section heading*/}

                <div className="projects-grid"> {/*CSS grid defined in style.css for responsive columns*/}
                    {projects.map((project, index) => ( // Loop over the projects array and render one card per item
                        <div key={index} className="project-card"> {/*Card wrapper*/}
                            <div className="project-image"> {/*Image area, overlay appears over this on hover*/}
                                <img src={project.image} alt={project.title}/> {/*Load the preview image for the project*/}
                                <div className="project-overlay"> {/*Transparent overlay shown on hover*/}
                                    <div className="project-links"> {/*Container to hold multiple action icons*/}
                                    <a 
                                        href={project.github} //Navigate to the GitHub repo on click
                                        target="_blank" // Opens link in a new tab
                                        rel="noopener noreferrer" // Security, prevent window.opener vulnerabilities
                                        className="project-link" // CSS class for styling button
                                    >
                                        <Github size={20} // Renders the GitHub icon at 20px inside the circle
                                    />
                                    </a>   
                                </div>
                           </div>
                     </div>

                     <div className="project-content"> {/*Text content below the image*/}
                        <h3 className="projects-title">{project.title}</h3> {/*Card title*/}
                        <p className="project-description">{project.description}</p> {/*Description paragraph*/}
                        <div className="project-technologies"> {/*Row of technology tags ("pills")*/}
                            {project.technologies.map((tech, techIndex) => ( //Loop over the technologies array
                                <span key={techIndex} className="tech-tag">{tech}</span> // For each individual tag, label the text inside the tag
                            ))}
                        </div>
                     </div>
                </div>
            ))}
        </div>
    </div>
</section>
)
}

export default Projects; //Export Projects component for use in HomePage.jsx