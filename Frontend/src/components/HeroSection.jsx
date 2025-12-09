export default function HeroSection() { // Define and export the HeroSection component
    return (
        <section id="heroSection" className="hero-section"> {/*Local id + CSS class for styling*/}
           <div className="hero-section-content-box"> {/*Layout wrapper providing spacing and max width*/}
                <div className="hero-section-content"> {/*Vertical stack for heading and paragraphs*/}
                    <p className="hero-description">Hey, I'm Abdulla Abdulla</p> {/*Paragraph statement above the main heading*/}
                    <h1 className="hero-section-title"> {/*Main headline*/}
                        <span className="hero-section-title-color">Computer Science: <br></br> Software Engineering Student</span> {/*Added it in span to apply accent color, with a line break*/}
                    </h1>
                    {/*Paragraph statement under the main heading*/}
                    <p className="hero-section-description">Hi, I'm Abdulla — a 3rd-year Computer Science (Software Engineering) student at Carleton University. I'm building real-world full-stack projects with React, Node.js, Express, PostgreSQL, Java and Spring Boot, while also strengthening my skills in Python, C++, C and Java.</p>  
                </div>
            </div>
        </section>
    );
    
}

