const skillCategories = [ //Array of categories, each with a title, icon, and skills list
        {
            title: "Frontend Development", // Category label shown at the top of the card
            icon: <img width="60" height="60" src="https://img.icons8.com/external-flaticons-lineal-flat-icons/48/external-front-end-computer-programming-flaticons-lineal-flat-icons.png" alt="external-front-end-computer-programming-flaticons-lineal-flat-icons"/>, // Icon visually representing the category
            skills: [ // Each individual skill shown under this category
                {icon: <img width="38" height="38" src="https://img.icons8.com/office/38/react.png" alt="react"/>, name: "React.js"},
                {icon: <img width="38" height="38" src="https://img.icons8.com/color/38/html-5--v1.png" alt="html-5--v1"/>, name: "HTML"},
                {icon: <img width="38" height="38" src="https://img.icons8.com/color/38/css3.png" alt="css3"/>, name: "CSS"},
                {icon: <img width="38" height="38" src="https://img.icons8.com/color/38/javascript--v1.png" alt="javascript--v1"/>, name: "JavaScript"}

            ],
        },
        {
            title: "Backend Development",
            icon: <img width="60" height="60" src="https://img.icons8.com/color/48/backend-development--v1.png" alt="backend-development--v1"/>,
            skills: [
                {icon: <img width="38" height="38" src="https://img.icons8.com/color/38/nodejs.png" alt="nodejs"/>, name: "Node.js"},
                {icon: <img width="38" height="38" src="https://img.icons8.com/ios/38/express-js.png" alt="express-js"/>, name: "Express.js"},
                {icon: <img width="38" height="38" src="https://img.icons8.com/color/38/python--v1.png" alt="python--v1"/>, name: "Python"},
                {icon: <img width="38" height="38" src="https://img.icons8.com/color/38/java-coffee-cup-logo--v1.png" alt="java-coffee-cup-logo--v1"/>, name: "Java"},
                {icon: <img width="38" height="38" src="https://img.icons8.com/color/38/c-programming.png" alt="c-programming"/>, name: "C"},
                {icon: <img width="38" height="38" src="https://img.icons8.com/color/48/c-plus-plus-logo.png" alt="c-plus-plus-logo"/>, name: "C++"}
                {icon: <img width="38" height="38" src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/38/external-postgre-sql-a-free-and-open-source-relational-database-management-system-logo-color-tal-revivo.png" alt="external-postgre-sql-a-free-and-open-source-relational-database-management-system-logo-color-tal-revivo"/>, name: "PostgreSQL"},
                {icon: <img width="38" height="38" src="https://img.icons8.com/fluency/38/sql.png" alt="sql"/>, name: "SQL"},
                {icon: <img width="38" height="38" src="https://img.icons8.com/color/34/spring-logo.png" alt="spring-boot"/>, name: "Spring Boot"},
                {icon: <img width="38" height="38" src="https://img.icons8.com/ios/25/api-settings.png" alt="api-settings"/>, name: "REST APIs"}
            ],
        },
        {
            title: "Tools",
            icon: <img width="60" height="60" src="https://img.icons8.com/color/48/administrative-tools.png" alt="administrative-tools"/>,
            skills: [
                {icon: <img width="38" height="38" src="https://img.icons8.com/color/38/git.png" alt="git"/>, name: "Git"},
                {icon: <img width="38" height="38" src="https://img.icons8.com/ios-glyphs/38/github.png" alt="github"/>, name: "GitHub"},
                {icon: <img width="38" height="38" src="https://img.icons8.com/color/32/visual-studio-code-2019.png" alt="visual-studio-code-2019"/>, name: "VS Code"},
                {icon: <img width="38" height="38" src="https://img.icons8.com/color/38/oracle-logo.png" alt="oracle-logo"/>, name: "Oracle VirtualBox"},
            ],
        },

        {
            title: "Soft Skills",
            icon: <img width="60" height="60" src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/48/external-soft-skills-job-search-flaticons-lineal-color-flat-icons-2.png" alt="external-soft-skills-job-search-flaticons-lineal-color-flat-icons-2"/>,
            skills: [
                {icon: <img width="38" height="38" src="https://img.icons8.com/ios/38/problem-solving-skills.png" alt="problem-solving-skills"/>, name: "Problem Solving"},
                {icon: <img width="38" height="38" src="https://img.icons8.com/dotty/38/group-task.png" alt="group-task"/>, name: "Teamwork"},
                {icon: <img width="38" height="38" src="https://img.icons8.com/ios/38/communication-skill.png" alt="communication-skill"/>, name: "Communication"},
                {icon: <img width="38" height="38" src="https://img.icons8.com/ios/38/time-management-skills.png" alt="time-management-skills"/>, name: "Time Management"},
                {icon: <img width="38" height="38" src="https://img.icons8.com/ios/38/critical-thinking--v1.png" alt="critical-thinking--v1"/>, name: "Critical Thinking"},
                {icon: <img width="38" height="38" src="https://img.icons8.com/ios/38/to-do.png" alt="to-do"/>, name: "Attention to Detail"},
            ],
        },
    ];

 function Skills() { // Defines the Skills component
    return (
        <section id="skills" className="skills-section"> {/*Wrapper with anchor ID for nav and CSS styling*/}
            <div className="section-container"> {/*Width constrained container for consistent layout*/}
                <h2 className="skill-section-title">Skills</h2> {/*Section heading*/}
                <div className="skills-grid"> {/*CSS grid for responsive category card layout*/}
                    {skillCategories.map((category, index) => ( // Loop over categories to render a card per category
                        <div key={index} className="skill-card"> {/*For CSS styling the card*/}
                            <div className="skill-header"> {/*Header area for styling category icon and title*/}
                                <div className="skill-icon">{category.icon}</div> {/*Render category icon*/}
                                <h3 className="skill-title">{category.title}</h3> {/*Render category title*/}
                            </div>
                            <div className="skill-list"> {/*Vertical list of skills for this category*/}
                                {category.skills.map((skill, skillIndex) => ( // Loop over the skills in this category
                                    <div key={skillIndex} className="skill-item"> {/*For CSS styling the skill icon and name*/}
                                        <span className="skill-icon">{skill.icon}</span> {/*Render the skill icon*/}
                                        <span className="skill-name">{skill.name}</span> {/*Render the skill name*/}
                                    </div>
                                    ))}
                                </div>
                            </div>
                            ))}
                        </div>
                      </div>
                </section>
              );
            }
            
            export default Skills; //Export Skills component for use in HomePage.jsx
