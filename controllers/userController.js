const agenda = require("../helper/sendEmail");

// Sending greetings mail: (morning)
module.exports.sendGreetingsMorning = async (req, res) => {

    try {
        await agenda.every('00 5 * * *', 'greetingMail_morning', {
            emailSubject: "GREETINGS",
        }, { timezone: 'Asia/Kolkata' });

        return res.status(200).json({
            success: true,
            message: "Greeting emails scheduled successfully"
        });
    } catch (error) {
        console.error('Error scheduling morning greeting emails:', error);
        return res.status(500).json({
            success: false,
            message: "Error scheduling greeting emails"
        });
    }
}

// Sending greetings mail (evening)
module.exports.sendGreetingsEvening = async (req, res) => {
    try {
        await agenda.every('00 19 * * *', 'greetingMail_evening', {
            emailSubject: "GREETINGS",
        }, { timezone: 'Asia/Kolkata' });

        return res.status(200).json({
            success: true,
            message: "greeting emails scheduled successfully"
        });
    } catch (error) {
        console.error('Error scheduling evening greeting emails:', error);
        return res.status(500).json({
            success: false,
            message: "Error scheduling greeting emails"
        });
    }
}
