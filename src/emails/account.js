const sgMail=require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)


const sendWelcomeEmail=(email,name)=>{
sgMail.send({

    to:email,
    from:'prabhakaryadavdynamic007@gmail.com',
    subject:'This is my first creation!',
    text:'Welcome to the app,'+name+' .Let me know how you get along with the app.'
})

}



const sendCancelationEmail=(email,name)=>{

    sgMail.send({

        to:email,
        from:'prabhakaryadavdynamic007@gmail.com',
        subject:'This is my first creation!',
        text:'Goodbye,'+name+'.I hope to see you back sometime soon.'
    })

}




module.exports={
    sendWelcomeEmail,
    sendCancelationEmail
}