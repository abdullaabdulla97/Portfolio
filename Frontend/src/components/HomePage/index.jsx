import HeroSection from '../HeroSection'; // Import the HeroSection component from the file HeroSection, to render the top intro section of the website
import Aboutme from '../Aboutme'; // Import the Aboutme component from the file Aboutme, section to introduce myself in detail
import Skills from '../Skills'; // Import the Skills component from the file Skills, showcases my skills
import Projects from '../Projects'; // Import the Projects component from the file Projects, shows he projects worked on
import Contact from '../Contact'; // Import the Contact component from the file Contact, for a visitor to get in touch me
import Footer from '../Footer'; // Import the Footer component from the file Footer, it is displayed the very bottom of the portfolio and contains navigation shortcuts 

export default function Home() { // Define and export the Home functional component, it is the main page of the portfolio. All the sections together into one continuous, scrollable page
    return (
        <>
        <section id="hero-section"> {/* the "id" attribute fro css styling and for nav anchoring*/}
        <HeroSection/> {/*Renders the HeroSection component inside this section. This ensures the top of the page always starts with the HeroSection*/}
        </section>
        <section id="about-me">
        <Aboutme/> {/*Renders the Aboutme component to dsiplay the introduction contonent about myself, skills and projects worked on*/}
        </section>
        <section id="skills">
        <Skills/> {/*Renders the Skills component to visually display the skills in categories*/}
        </section>
        <section id="projects">
        <Projects/> {/*Render the Projects component, which shows project cards with descriptions*/}
        </section>
        <section id="contact">
        <Contact/> {/*Renders the Contact component with form fields (name, email, message) */}
        </section> 
        <Footer/> {/*Renders the Footer component, it is dsiplayed at the very bottom showing the navigations and social links, no nav anchor is needed */}
        </>
    );

}