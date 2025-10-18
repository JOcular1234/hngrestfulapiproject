import express from "express";
import fetch from "node-fetch";

const app = express();
const port = process.env.PORT || 3000;

// Profile endpoint with dynamic cat fact
app.get("/me", async (req, res) => {
    try {
        // Fetch cat fact from external API with timeout
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout
        
        const response = await fetch("https://catfact.ninja/fact", {
            signal: controller.signal
        });
        clearTimeout(timeoutId);
        
        if (!response.ok) {
            throw new Error(`Cat Facts API returned status: ${response.status}`);
        }
        
        const catData = await response.json();
        const catFact = catData.fact;
        
        // Generate current UTC timestamp in ISO 8601 format
        const timestamp = new Date().toISOString();
        
        // Return JSON response with all required fields
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json({
            status: "success",
            user: {
                email: "mfonobongumoh75@gmail.com",
                name: "Mfon-Obong Monday Umoh",
                stack: "Node.js/Express"
            },
            timestamp: timestamp,
            fact: catFact
        });
        
    } catch (error) {
        console.error("Error fetching cat fact:", error.message);
        
        // Handle errors gracefully with fallback
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json({
            status: "success",
            user: {
                email: "mfonobongumoh75@gmail.com", 
                name: "Mfon-Obong Monday Umoh", 
                stack: "Node.js/Express"
            },
            timestamp: new Date().toISOString(),
            fact: "Unable to fetch cat fact at this time. Did you know cats are amazing?"
        });
    }
});

app.get("/", (req, res) => {
    res.send("Hello, Welcome to my restful API cat fact");
});

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});