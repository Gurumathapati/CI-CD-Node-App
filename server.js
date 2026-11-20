
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// Home route
app.get("/", (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>CI/CD Major Project</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    text-align: center;
                    background: #f0f4f8;
                    padding: 100px 20px;
                }
                .container {
                    background: white;
                    padding: 40px;
                    border-radius: 12px;
                    max-width: 600px;
                    margin: auto;
                    box-shadow: 0 4px 15px #0002;
                }
                h1 { color: #2563eb; }
                p { color: #444; }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Welcome to My CI/CD Project!</h1>
                <p>Node.js application is running successfully.</p>
                <p>Automated deployment using GitHub Actions.</p>
                <h3>Project Status: Successful</h3>
            </div>
        </body>
        </html>
    `);
});

// Health check route
app.get("/health", (req, res) => {
    res.json({
        status: "OK",
        message: "Application is healthy"
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
