const { google } = require('googleapis');

module.exports = async (req, res) => {
  // Only allow POST requests
  if (req.method === 'POST') {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    try {
      // Set up Google Sheets API authentication using environment variables
      const auth = new google.auth.JWT(
        process.env.GOOGLE_CLIENT_EMAIL,
        null,
        process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
        ['https://www.googleapis.com/auth/spreadsheets']
      );

      const sheets = google.sheets({ version: 'v4', auth });

      // Append email to Google Sheets
      const response = await sheets.spreadsheets.values.append({
        spreadsheetId: process.env.SPREADSHEET_ID,
        range: 'Sheet1!A1',
        valueInputOption: 'RAW',
        resource: { values: [[email]] },
      });

      res.status(200).json({ message: 'Email written successfully', response });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  } else {
    // Handle invalid HTTP methods
    res.status(405).json({ error: 'Method Not Allowed' });
  }
};
