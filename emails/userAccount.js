const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)




const TrailBlazersUser = (email, name) => {
    sgMail.send({
        to: email,
        from: 'trailblazersbrokers@gmail.com',
        subject: 'TrailBlazers Insurance Brokers',
        text: ` Hello ${name},Welcome to TrailBlazers Insurance Brokers, we guarantee the best insurance services money can buy`
    }).then(() => {
        console.log('Message sent')
    }).catch((error) => {
        console.log(error.response.body)
        // console.log(error.response.body.errors[0].message)
    })
}
;  
 module.exports = {
    TrailBlazersUser
}

