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
                    <p className="hero-section-description">I’m a third-year Computer Science (Software Engineering) student at Carleton University who builds reliable full-stack web apps. I work with Java, JavaScript, Python, C++, React, Node.js, SQL, and REST APIs, and I focus on clean code, testing edge cases, and clear documentation.</p>  
                </div>
            </div>
        </section>
    );
    
}

