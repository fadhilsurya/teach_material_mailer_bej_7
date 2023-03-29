const nodemailer = require('nodemailer')

require('dotenv').config()

function sendEmail(req, res) {

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: process.env.USERNAME_AUTH, // generated ethereal user
            pass: process.env.USERPASS_AUTH, // generated ethereal password
        },
    })

    const mail = {
        from: process.env.USERNAME_AUTH,
        to: 'fadhilsurya1@gmail.com',
        subject: 'testing_task',
        text: 'testing task check whether this ok or not'
    }

    transporter.sendMail(mail, (err, info) => {
        if (err) {
            console.error(err)

            res.json({
                data: err,
                status: 500
            })
        }
        res.json({
            data: 'success',
            status: 200
        })

        return
    })

}

module.exports = {
    sendEmail
}