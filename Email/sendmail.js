/* For this program we have to install nodemailer throw the npm terminal.
    after the connecting with smtp we have create ID & Password from Ethereal side. 
    also we can see mails on the same.
    Need to refresh local Host for run program*/


const nodemailer = require('nodemailer');  // nodemailer access

const sendmail=  async(req, res) =>
{
    let testaccout = await nodemailer.createTestAccount(); // Test acount Created.

    // Connecting with the SMTP server.

    let transport= await nodemailer.createTransport(
        {
            host: "smtp.ethereal.email",
             port: 587 ,
            
         auth: {
             user: 'geovanni.lind50@ethereal.email',  // this ID & Pswd from the Ethereal side.
             pass: 'dDtdar3zk5174TRBsR'

                }
        }        
    );


    // now creating body of Mail.

    let info = await transport.sendMail(

        {
            from: '" Onkar Adate" <onkar@gmail.com>', // sender address
             to: "adateonkar@gmail.com", // list of receivers
             subject: "Demo email", // Subject line
            text: "Hello world....", // plain text body
            html: "<b>Hello world?</b>", // html body

        }
        
    );
    console.log("Message sent: %s", info.messageId);  // Print msg on console    
    res.send(info); // print msg on web page
}

module.exports= sendmail;  // exporting sendmail funtion to Index.js

