const dotenv = require('dotenv');

dotenv.config();

exports.default = {
    env: {
        EMAIL_KEY: process.env.EMAIL_KEY,
    },
};
