const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve the form.html file when the user accesses the website
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/form.html');
});

// Handle the form submission
app.post('/submit', (req, res) => {
  // Get the form data
  const name = req.body.name;
  const email = req.body.email;
  const item = req.body.item;
  const message = req.body.message;

  // Create a transporter using nodemailer (replace with your email provider's settings)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'noumannawazwork@gmail.com', // Replace with your email address
      pass: '786786business', // Replace with your email password
    },
  });

  // Prepare the email content
  const mailOptions = {
    from: 'noumannawazwork@gmail.com', // Replace with your email address
    to: 'noumannawazwork@gmail.com', // Replace with your email address
    subject: 'New Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nItem: ${item}\nMessage: ${message}`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send('Error');
    } else {
      console.log('Email sent: ' + info.response);
      res.send('Success');
    }
  });
});

// Start the server
const port = 3000; // You can use any port you prefer
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
