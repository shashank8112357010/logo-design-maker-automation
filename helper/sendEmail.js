const Agenda = require("agenda");
const nodemailer = require("nodemailer");
require("dotenv").config();
const { MongoClient } = require('mongodb');
const { eveningEmail } = require("../emailTemplates/eveningEmailTemplate");
const { morningEmail } = require("../emailTemplates/morningEmailTemplate");

const connectionString = process.env.DB_URL;
if (!connectionString) {
    throw new Error('DB_URL environment variable is not set.');
}

const client = new MongoClient(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });

async function fetchUserData() {
    await client.connect();
    const database = client.db('test');
    const usersCollection = database.collection('usermodels');

    const users = await usersCollection.find({ mailAllow: true }).toArray();
    return users;
}

const agenda = new Agenda({
    db: {
        address: connectionString,
        collection: 'emailJobsCron',
    }
});

const transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    },
    tls: {
        rejectUnauthorized: false,
    }
})

// mail to be sent in morning: 
agenda.define("greetingMail_morning", async (job) => {
    const { emailSubject } = job.attrs.data;

    try {
        const users = await fetchUserData();
        for (let user of users) {
            const toSender = user.workEmail;

            const htmlToSend = morningEmail(user.username);

            const message = {
                from: process.env.EMAIL,
                to: toSender,
                subject: emailSubject,
                // text: messageContent,
                html: htmlToSend,
            }
            await transporter.sendMail(message);
            console.log("Email for morning greeting sent successfully to: ", toSender);
        }
    } catch (error) {
        console.error('Error sending morning greeting:', error);
        throw new Error("Email could not be sent");
    }
})

// to be sent in evening: 
agenda.define("greetingMail_evening", async (job) => {
    const { emailSubject } = job.attrs.data;

    try {
        const users = await User.find({ mailAllow: true });
        for (let user of users) {
            const toSender = user.workEmail;
            const htmlToSend = eveningEmail(user.username);

            const message = {
                from: process.env.EMAIL,
                to: toSender,
                subject: emailSubject,
                // text: messageContent,
                html: htmlToSend,
            }
            await transporter.sendMail(message);
            console.log("Email for evening greeting sent successfully");
        }
    } catch (error) {
        console.error('Error sending evening greeting email:', error);
        throw new Error("Email could not be sent");
    }
})

// Event handlers for Agenda
agenda.on('ready', () => {
    console.log('Agenda started!');
    agenda.start();
});

agenda.on('error', (error) => {
    console.error('Agenda connection error:', error);
    throw new Error("Agenda connection error");
});


module.exports = agenda;