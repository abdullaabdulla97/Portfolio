import {Github} from "lucide-react" //Import a GitHub icon from lucid-react for the overlay link button

const projects = [ // Array of projects metadata rendered into cards.
    {title: "Weather App", // title of the card
     description:"A modern weather forecast application built with React and the OpenWeatherMap API. It allows users to search for cities, view the current weather, check an hourly forecast (24h), and see a 5-day forecast. Users can also toggle between Celsius and Fahrenheit and view summaries for a few major world cities.", // description of what the project does
     image: "images/Weather-App-Project.png", // Path to the image
     technologies:["React", "JavaScript", "CSS", "REST API"], // tags indicating the technology used, rendered as pills
     github:"https://github.com/abdullaabdulla97/weather-app-project", // link to the project on github
    },

    {title: "Media Tracker App",
     description: "A full-stack movie and TV show tracking application built with React (frontend) and Spring Boot + PostgreSQL (backend). Users can sign up / log in, search for movies & shows (via TMDB API), and organize their Watchlist, Favourites, and Watched collections.",
     image: "images/Media-Tracker-App-Project.png",
     technologies: ["React", "JavaScript", "CSS", "Spring Boot", "Java", "PostgreSQL", "REST API"],
     github: "https://github.com/abdullaabdulla97/media-tracker-app-project",
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
