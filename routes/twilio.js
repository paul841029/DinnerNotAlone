var twilio = require("twilio");
var accountSid = 'ACc4de9be93cf0f36b1b04a13043e4779d'; // Your Account SID from www.twilio.com/console
var authToken = 'ff8c61c4f711f7c11922292ea22db66f';   // Your Auth Token from www.twilio.com/console

var client = new twilio.RestClient(accountSid, authToken);

module.exports = {
	sendSms: function(message){
	  	client.messages.create({
	    body: message,
	    to: '8323352890',  // Text this number
	    from: '+19703682960' // From a valid Twilio number
	}, function(err) {
    if (err) {
      console.error('Could not notify administrator');
      console.error(err);
    } else {
      console.log('Administrator notified');
    }
	});
}
}