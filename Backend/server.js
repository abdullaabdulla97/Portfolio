const express = require("express"); // Express: minimal web framework for Node (routing + middleware)
const dotenv = require("dotenv"); // dotenv: Loads environment variables from a .env file into process.env
const {Resend} = require("resend"); // Resend SDK: Lets us send transactional emails via Resend service
const cors = require("cors"); // CORS middleware: allows the frontend (different origin) to call this API 

dotenv.config(); // Reads the .env file and populate process.env (e.g., RESEND_API_KEY)

const app = express(); // Create an Express application instance
const resend = new Resend(process.env.RESEND_API_KEY); // Instantiate Resend client with API key

app.use(cors()); //Enables Cross-Origin Resource Sharing for all routes (frontend -> backend)
app.use(express.json()); // Parse incoming request bodies with JSON payLoads into reg.body

app.post("/api/contact", async (request, response) => { // Define POST endpoint that receives contact form submissions
    const {name, email, message} = request.body; // Extract fields from the JSON body sent by the frontend
    console.log("Contact submitted:", {name, email}); // Log minimal info for debugging
try { // Wrap email-sending logic in try/catch for robust error handling 
    const {error} = await resend.emails.send({ // Call Resend API to send a single email
        from: "Portfolio Contact <onboarding@resend.dev>", // Sender address, using the verified domain
        to: ["abdullasalem983@outlook.com"], // Destination to my email address
        subject: `New message from ${name || "Visitor"}`, // Subject line includes the sender's name
        text: `From: ${name} <${email}>\n\n${message}`, // Plain-text body with the sender info + the message content
        reply_to: email, // So that "Reply" in your email client goes to the sender
    });

    if (error) { // If the Resend API indicates an error
        console.error("Resend error:", error); // then logged the error for troubleshooting
        return response.status(500).json({ok: false, error: "send failed"}); // and tell the frontend that sending failed
    } else {
        response.json({ok: true}); // If no error, confirm success to the frontend
        console.log("Email was successfully sent to:", "abdullasalem983@outlook.com") // log the message for debugging
    }
} catch (error) { // If unexpected server/network error occurs
    console.error("Servor error:", error); // log that error
    response.status(500).json({ok: false}); // then return a generic failure JSON to the frontend
 }
});

app.listen(5000, () => { // Start the HTTP server on port 5000
    console.log("Server running at http://localhost:5000"); // Logs the URL so we know that it is running and working
});