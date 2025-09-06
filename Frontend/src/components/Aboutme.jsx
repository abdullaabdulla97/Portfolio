function Aboutme() { // Defines the Aboutme component
    return (
        <section id="aboutme" className="about-me-section"> {/*id and CSS class for styling*/}
            <div className="about-me-section-container"> {/*Constrains width and controls vertical spacing*/}
                <h2 className="about-me-title">About Me</h2> {/*Section Heading*/}
                <div className="about-me-description"> {/*Column layout for paragraph statement and call to action area*/}
                    <p>
                        I'm a detail-oriented and motivated software engineering student with strong full-stack web development skills. My portfolio highlights projects where I've applied both technical and creative problem-solving:
                    </p>
                    <ul>
                        <li>Media Tracker App - A full-stack app with a Spring Boot backend + PostgreSQL database and a React frontend. Users can sign up, sign in, and manage movies/TV shows with features like watchlist, favourites, and watched toggles. Built responsive design in 3 weeks.</li>
                        <li>Weather App - A React app that integrates the OpenWeatherMap API to display current conditions, 24-hour forecasts, and 5-day trends. Includes a Celsius/Fahrenheit toggle and responsive UI. Built in 2 weeks.</li>
                        <li>Fast Food Tier List - An interactive ranking site using Node.js, Express, SQLite, and Handlebars templates. Features drag-and-drop ranking with dynamically fetched restaurant logos and persistent user rankings.</li>
                    </ul>
                    <p>
                        Through these projects, I've gained hands-on experience with API integration, database management, authentication systems, responsive design, and deployment tools (Vercel/Render). I'm now looking for a Summer 2026 co-op position (Ottawa or remote) where I can contribute as a full-stack developer, front-end engineer, or software developer, while continuing to learn and grow.
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
