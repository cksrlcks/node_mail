const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'chanki.kim89@gmail.com',
        pass: process.env.EMAIL_KEY,
    },
});

const send = ({ email, name, text }) => {
    const from = name && email ? `${name} <${email}>` : `${name || email}`;
    const message = {
        from,
        to: 'chanki.kim89@gmail.com',
        subject: `New message from ${from}`,
        text,
        replyTo: from,
    };

    return new Promise((resolve, reject) => {
        transporter.sendMail(message, (error, info) => (error ? reject(error) : resolve(info)));
    });
};

module.exports = send;
