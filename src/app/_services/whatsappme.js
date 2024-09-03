const wbm = require('wbm');

wbm.start({ showBrowser: true, session: './user_data' }) // Use your existing session data
    .then(async () => {
        // Directly use the phone number for yourself
        const phoneNumber = '381693006690'; // Your own phone number with country code
        const message = 'Hello, this is a test message to myself!'; // The message you want to send

        // Send the message to yourself
        await wbm.sendTo(phoneNumber, message);
        console.log('Message sent successfully to myself!');

        // End the session
        await wbm.end();
    })
    .catch(err => {
        console.log('Error occurred:', err);
    });
