const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeMail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'ennio520@gmail.com',
        subject: 'Thanks for joining in to the app',
        text: `Welcome to the App, ${name}. Let me know if do you like the App.`
    })
}

const sendAfterDeletedAccount = (email, name) => {
    sgMail.send({
        to: email,
        from: 'ennio520@gmail.com',
        subject: 'Bye',
        text: `We are sorry to not hear you anymore, bye ${name}`
    })
}

module.exports = {
    sendWelcomeMail,
    sendAfterDeletedAccount
}