function Aboutme() { // Defines the Aboutme component
    return (
        <section id="aboutme" className="about-me-section"> {/*id and CSS class for styling*/}
            <div className="about-me-section-container"> {/*Constrains width and controls vertical spacing*/}
                <h2 className="about-me-title">About Me</h2> {/*Section Heading*/}
                <div className="about-me-description"> {/*Column layout for paragraph statement and call to action area*/}
                                   <div className="about-me-description"> {/*Column layout for paragraph statement and call to action area*/}
                    <p>
                        I’m a third-year Computer Science student in the Software Engineering stream at Carleton University with a strong interest in building reliable, well-structured software systems from end to end. I enjoy working across the stack—from designing backend logic and data models to building clean, user-friendly interfaces—and I’m especially motivated by projects where correctness, clarity, and real-world usability matter. Through university coursework and personal projects, I’ve developed a solid foundation in Java, Python, C++, JavaScript, HTML, and CSS, along with experience using React, Node.js/Express, Spring Boot, SQL, and RESTful APIs. I’ve built full-stack applications that include authentication, database-backed workflows, external API integration, and frontend state management. My projects focus on writing clear, maintainable code, validating inputs and edge cases, and debugging issues systematically rather than relying on trial and error. I’m comfortable working with structured data and backend systems. I’ve designed relational schemas, written SQL queries, transformed JSON data, and built APIs that support real workflows. I’ve also worked in Linux-based development environments, using the command line to compile, run, and debug programs, and I regularly use Git for version control, incremental development, and tracking changes over time. Beyond coding, I value organization, documentation, and communication. I’ve written READMEs and project documentation to explain system behavior and setup, helped teammates and classmates debug code by walking through logic step by step, and presented technical work in a way that makes sense to both technical and non-technical audiences. I approach problems methodically, break large tasks into manageable steps, and test my work carefully to ensure reliability.
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
