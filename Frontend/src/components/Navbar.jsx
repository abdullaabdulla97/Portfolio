import { useState, useEffect } from "react" // useState: local state for menu and useEffect: to perform side effects in your components
import {Link} from "react-scroll" // used for smooth scrolling navigation to target IDs on the same page
import {Menu, X} from "lucide-react"; // Import the "Menu" (hamburger) icon from lucide-react for mobile toggle button

function Navbar() { // Defines the Navbar component
    // navOpen tracks whether the mobile navigation menu is open (for small screens)
    const [navOpen, setNavOpen] = useState(false);

    const closeMenu = () => { // function to close the menu
        setNavOpen(false) // Force close the mobile menu (used after Link click or resize)
    }

    useEffect(() => { // to handle window resize for small devices
        const handleResize = () => { // Define the handler that runs when the window is resized
            if (window.innerWidth <= 500) { // if it is less than or equal to 500px
                closeMenu(); // then closes the menu
            }
        };

        window.addEventListener("resize", handleResize); // adds event listener for window resize
        
        return () => { // function to remove the event listener
            window.removeEventListener("resize", handleResize);
        };
    }, []); /// empty array means this effect runs once

    useEffect(() => { // on initial mount, check current width as well
        if (window.innerWidth <= 1200) { // for screen sizes less than or equal to 1200px
            closeMenu(); // start with menu closed
        }
    }, []); // empty array means this effect runs once

    return ( // Render the navigation bar
        <nav className={`navbar ${navOpen ? "active" : ""}`}> {/*Add "active" to root for CSS styling*/}
            <button
                className={`nav__hamburger ${navOpen ? "active" : ""} `} // Changes the style when active
                type="button"
                aria-label="Toggle menu"                    // Accessibility label
                aria-expanded={navOpen ? "true" : "false"}  // Accessibility state
                onClick={() => setNavOpen(v => !v)}         // Toggle navOpen on click
            >
                {navOpen ? <X size={28}/> : <Menu size={28}/>} {/* Lucide-react Menu (hamburger) icon and X icon when closing the menu */}
            </button>

            <div className={`navbar--items ${navOpen ? "active" : ""}`}> {/*Collapsible container for nav links*/}
                <ul> {/*Unordered list*/}
                    <li>
                        <Link
                         onClick={closeMenu} // Close menu after navigation
                         activeClass="navbar--active-content" // CSS class applied when target section is in view
                         spy={true} // Watch scrolling to control activeClass
                         smooth={true} //Animate the scrolling rather than humping instantly
                         offset={-70} // Offset scroll target to account for fixed navbar height
                         duration={500} // Animation duration in milliseconds
                         to="hero-section" // ID of the section to scroll to (must match id="hero-section")
                         className="navbar--content" // Class for typography/spacing of the link and styling
                        > 
                            Home  {/*Visible text of the link*/}
                         </Link>
                    </li>
                        
                    <li> 
                         <Link     //"About Me" link item
                         onClick={closeMenu}
                         activeClass="navbar--active-content"
                         spy={true}
                         smooth={true}
                         offset={-70}
                         duration={500}
                         to="about-me"
                         className="navbar--content">
                            About Me
                         </Link>
                    </li>
                    
                    <li>
                         <Link  // "Projects" link item
                         onClick={closeMenu}
                         activeClass="navbar--active-content"
                         spy={true}
                         smooth={true}
                         offset={-70}
                         duration={500}
                         to="projects"
                         className="navbar--content">
                            Projects
                         </Link>
                    </li>  
                </ul>
            </div>
                   <Link  // "Contact Me" link item
                         onClick={closeMenu}
                         activeClass="navbar--active-content"
                         spy={true}
                         smooth={true}
                         offset={-70}
                         duration={500}
                         to="contact"
                         className="btn btn-outline-primary">
                            Contact Me
                    </Link>
        </nav>
    );
}

export default Navbar; // Export Navbar so App.jsx can render it

