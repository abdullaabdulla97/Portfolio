import { useState } from "react"; // useState: manage contolled inputs + status message
import {Mail, Phone, MapPin, Send} from "lucide-react"; // Import icon components from lucide-react


const contactInformation = [ // Static array of details displayed in the left column
    {
        icon: Mail,
        title: "Email",
        value: "abdullasalem983@outlook.com",
        link: "mailto:abdullasalem983@outlook.com"
    },
    {
        icon: Phone,
        title: "Phone Number",
        value: "613-890-5976",
        link: "tel:613-890-5976"
    },
    {
        icon: MapPin,
        title: "Address",
        value: "1657 Frenette Street, Ottawa, Ontario",
        link: null
    },
];


function Contact() { // Define the Contact component
const [formInformation, setFormInformation] = useState ({ // Controlled form state for the three fields
    name: "", // Initial value for "name" input
    email: "", // Initial value for "email" input
    message: "" // Initial value for "message" textarea
});

const [status, setStatus] = useState(""); // String shown under the button for success/error message

function handleChange(e) { // Called on every keystroke in inputs/textarea
    setFormInformation({ // Update state immutably
        ...formInformation, // Copy all existing fields
        [e.target.name]: e.target.value // Replace the changed field by using it's "name" attribute
    });
}

BASE_URL = process.env.REACT_APP_API_URL;
async function handleSubmit(e) { // Called when the form is submitted
    e.preventDefault(); // Prevent the browser from reloading the page by default
    try { // Try to send a POST request to the backend
        const response = await fetch(`${BASE_URL}/api/contact`, { // Endpoint defined in server.js
            method: "POST", // POST because we are sending data to create an email
            headers: {"Content-Type": "application/json"}, //Tell server we are sending JSON
            body: JSON.stringify(formInformation), // Convert form state object into JSON string
        });
        const data = await response.json(); //Parse JSON response from server

        if (data.ok) { // If server reported success
            setStatus("Message sent!"); // Shows success message to the user
            setFormInformation({name: "", email: "", message: ""}); // Resets the form fields to empty
        } else { // If server indicated failure
            setStatus("Failed to send. Please try again."); // Shows a error message
        }
    } catch (error) { // If the fetch itself fails (network, server down, etc.)
        setStatus("Network error. Please try again."); // Tells the user a network error occured
    }
}

return ( // Renders the contact section markup
    <section id="contact" className="contact-section"> {/*Anchor ID for navigation and CSS class for styling*/}
        <div className="contact-container"> {/*Width constrained container used by CSS grid*/}
            <h2 className="contact-maintitle"> {/*Section Heading*/}
                Contact Me
            </h2>
            <div className="contact-content"> {/*Grid with two columns on larger screens*/}
                <div className="contact-info"> {/*Left column: static contact details*/}
                    <h3 className="contact-subtitle">Get In Touch</h3> {/*Subheading*/}
                    <p className="contact-paragraph"> {/*Paragraph statement explaining how to reach me*/}
                        If interested in hiring me or want to collaborate on projects please contact me either by email or phone.
                    </p>
                    <div className="contact-information"> {/*Container for the list of contact items*/}
                        {contactInformation.map((info, index) => { // Loop over the static list and render rows
                            const Icon = info.icon; // Alias the icon component so we can render it
                            return ( // Return a single contact row
                                <div key={index} className="contact-item"> {/*Row wrapper with spacing and alignment*/}
                                    <div className="contact-icon"> {/*Icon container with fixed size*/}
                                        <Icon size={24}/> {/*Render the icon (Mail/Phone/MapPin) at 24px*/}
                                        </div>
                                        <div className="contact-text"> {/*Right side: label + value (link + plain)*/}
                                            <h4 className="contact-label"> {/*Label text (e.g., "Email")*/}
                                                {info.title}
                                            </h4>
                                            {info.link ? ( // If a link is present (email/phone)
                                                <a href={info.link} className="contact-link"> 
                                                    {info.value} {/*Render as clickable link*/}
                                                </a>
                                            ) : (  // Otherwise (address)
                                                <span className="contact-value">{info.value}</span> // Render plain text
                                            )}
                                            </div>
                                        </div>
                                      )
                                    })}
                                 </div>
                              </div>

                              <form onSubmit={handleSubmit} className="contact-form"> {/*Right column: controlled form*/}
                                <div className="form-submit"> {/*Name field block*/}
                                    <label htmlFor="name" className="form-label">Name</label> {/*Accessible label link via htmlFor/id*/}
                                    <input
                                      type="text" //Input type for free form name text
                                      id="name" // ID used by the label's htmlFor
                                      name="name" // Name attribute must match the state key for handleChange
                                      value={formInformation.name} // Controlled value synced to state
                                      onChange={handleChange} // Update state on every keystroke
                                      required // Basic HTML5 validation
                                      className="form-input" // CSS class for styling
                                      placeholder="Enter full name" // Placeholder text inside the field
                                      />
                                </div>

                                <div className="form-group">     {/*Email field block*/}
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input
                                      type="email"  // Input type triggers browser email validation
                                      id="email"
                                      name="email"
                                      value={formInformation.email}
                                      onChange={handleChange}
                                      required
                                      className="form-input"
                                      placeholder="Enter your email address"
                                      />
                                </div>

                                <div className="form-group">  {/*Message field block*/}
                                    <label htmlFor="message" className="form-label">Message</label>
                                    <textarea
                                      id="message"
                                      name="message"
                                      value={formInformation.message}
                                      onChange={handleChange}
                                      required
                                      className="form-textarea"
                                      placeholder="Send me a message"
                                      rows="5"  // Initial visible rows in the textarea
                                      />
                                </div>

                                <button type="submit" className="submit-btn"> {/*Submit button triggers onSubmit handler*/}
                                    <Send size={25}/> {/*Icon inside the button*/}
                                    Send {/*Visible button label*/}
                                </button>

                                {status && (  //Conditionally render a status message if not empty
                                    <p className={`status-message ${status.includes("sent") ? "success" : "error"}`}>{status}</p> //Show "Message sent!" or an error string
                                )}
                             </form>
                        </div>
                    </div>
                </section>
              );
            };
            
            export default Contact; // Export Contact for HomePage composition

