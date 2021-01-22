const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
	auth: {
		api_key: 'e7ce1c68bf9be2487a083fada7ff49bd-e438c741-dcbfabb2',
		domain: 'sandboxbd1d76f4d44a4dd0af0504fdea7de48d.mailgun.org'
	}
};

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (email, subject, text, cb) => {
	const mailOptions = {
		from: email,
		to: 'aminutara@gmail.com',
		subject,
		text
	};

	transporter.sendMail(mailOptions, function(err, data) {
		if(err){
			cb(err, null);
		}
		else {
			cb(null, data);
		}
	});	
}

module.exports = sendMail;

