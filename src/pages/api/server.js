// Import necessary modules
const express = require('express');
const cors = require('cors');
const { google } = require('googleapis');
require('dotenv').config(); // To load environment variables from .env file

// Initialize Express
const app = express();

// Middleware
app.use(cors()); // Allow cross-origin requests
app.use(express.json()); // Parse JSON bodies

// API route to handle email submission
app.post('/api/writeSingleEmail', async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ error: 'Email is required' });
    }

    try {
        // Authenticate with Google Sheets API using a service account
        const auth = new google.auth.JWT(
            process.env.GOOGLE_CLIENT_EMAIL,
            null,
            process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
            ['https://www.googleapis.com/auth/spreadsheets']
        );

        const sheets = google.sheets({ version: 'v4', auth });

        // Append the email to the specified range in the Google Sheets
        const response = await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.SPREADSHEET_ID,
            range: 'Sheet1!A1', // Specify your target range in the spreadsheet
            valueInputOption: 'RAW',
            resource: { values: [[email]] },
        });

        // Respond to the client with success
        res.status(200).json({ message: 'Email written successfully', response });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Start the server on a specific port
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
