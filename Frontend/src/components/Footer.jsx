import {Link} from "react-scroll"; // Import Link to create smooth scrolling anchors

function Footer() { // Define the Footer component
    return ( // Render the footer content
        <footer className="footer-section"> {/*Wrapper element styled as a footer bar*/}
            <div className="footer-list"> {/*Container for the in-page navigation links*/}
                <ul>   {/*Semantic unordered list of links*/}
                    <li>
                        <Link  //*Link item: Home section
                         activeClass="navbar--active-content" // Apply this class when target is in view
                         spy={true} // Observe scroll position to toggle activeClass
                         smooth={true} // Animate scrolling rather than jump instantly
                         offset={-70} // Offset to account for fixed navbar height
                         duration={500} // Scroll animation duration in ms
                         to="hero-section" // Target ID scroll to
                         className="text-md"> {/*Typography class from CSS*/}
                            Home        {/*Visible link text*/}
                         </Link>
                    </li>
                        
                    <li>
                         <Link  // Link item: Projects
                         activeClass="navbar--active-content"
                         spy={true}
                         smooth={true}
                         offset={-70}
                         duration={500}
                         to="projects"   // Scroll to id="projects"
                         className="text-md">
                            Projects
                         </Link>
                    </li>
                    
                    <li>
                         <Link // Link item: About Me
                         activeClass="navbar--active-content"
                         spy={true}
                         smooth={true}
                         offset={-70}
                         duration={500}
                         to="about-me"  // Scroll to id="about-me"
                         className="text-md">
                            About Me
                         </Link>
                    </li>
                    <li>
                        <Link  // Link item: Contact
                         activeClass="navbar--active-content"
                         spy={true}
                         smooth={true}
                         offset={-70}
                         duration={500}
                         to="contact"  // Scroll to id="contact"
                         className="text-md">
                            Contact Me
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="footer-icon-social"> {/*Container for external social icons*/}
                <ul>
                    <li> {/*List of external profile links*/}
                        <a href="https://www.linkedin.com/in/abdulla-abdulla-350a0937b/" // my LinkedIn URL
                        target="_blank"  // Open the profile in a new tab
                        rel="noopener noreferrer" // Security: prevent tab hijacking
                        className="navbar--content"> {/*CSS class for styling*/}
                            <img  // LinkedIn icon
                            width="50"  // dimensions of image 50x50
                            height="50" 
                            src="https://img.icons8.com/ios-glyphs/32/linkedin.png" // Icon link
                            alt="linkedin"/> {/*Text alternative for accessibility*/}
                            </a>
                        </li>
                        <li> {/*Github icon link*/}
                            <a 
                            href="https://github.com/abdullaabdulla97" // My GitHub profile URL
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="navbar--content">
                                <img 
                                width="50" 
                                height="50" 
                                src="https://img.icons8.com/ios-glyphs/32/github.png" 
                                alt="github"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </footer>
                );
            }
            
            export default Footer; // Export Footer for HomePage composition