function Aboutme() { // Defines the Aboutme component
    return (
        <section id="aboutme" className="about-me-section"> {/*id and CSS class for styling*/}
            <div className="about-me-section-container"> {/*Constrains width and controls vertical spacing*/}
                <h2 className="about-me-title">About Me</h2> {/*Section Heading*/}
                <div className="about-me-description"> {/*Column layout for paragraph statement and call to action area*/}
                    <p>
                        I'm Abdulla Abdulla, a third-year Computer Science: Software Engineering student at Carleton University with a passion for building software that's both functional and enjoyable to use. I like taking projects from a simple idea to a polished product by designing clean, responsive UIs and connecting them to solid, reliable backends.
                        

                    </p>

                    <p>
                        One project I'm proud of is my Weather App, which I built in two weeks using React, JavaScript, CSS, and a REST API. It lets users search for any city and instantly see current conditions, hourly forecasts, and multi-day forecasts, all in a layout that works seamlessly on mobile, tablet, and desktop.                

                    </p>

                    <p>
                        I also built a Media Tracker App in three weeks using React for the frontend, Java + Spring Boot for the backend, and PostgreSQL to store user accounts, watchlists, favourites, and watched items. It includes secure sign-up/sign-in, search and filtering, and real-time updates between the UI and database, making it easy for users to keep track of their favourite movies and TV shows.

                       

                    </p>

                    <p>
                        I'm comfortable working with HTML, CSS, JavaScript, React, Node.js, Express, PostgreSQL, Java, Python, and C. I use tools like Git/GitHub, VS Code, and Oracle VirtualBox to keep my workflow efficient. I'm excited to join a team where I can keep learning, contribute to meaningful projects, and help build software that people love to use.
                       

                    </p>
                    <div className="about-me-buttons"> {/*Call to action for the resume link*/}
                        <a href="/" className="btn btn-resume">Resume</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Aboutme; // export the Aboutme component for use in HomePage.jsx