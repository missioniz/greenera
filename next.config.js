/* eslint @typescript-eslint/no-var-requires: "off" */

const path = require('path');
const nextTranslate = require('next-translate');
require('dotenv').config();

module.exports = {
    env: {
        SENDGRID_API_KEY: process.env.SENDGRID_API_KEY
    },
    future: {
        webpack5: true
    },
    ...nextTranslate(),
    sassOptions: {
        includePaths: [path.join(__dirname, './src/styles')]
    },
    target: 'serverless'
};
