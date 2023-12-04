function one_point_one() {
  //change the mail address with the true one
  const recipient = 'khinezar.ncc@gmail.com';
  const subject = 'sample mail';
  
  let body = '';
  body += 'Mr. Sample \n';
  body += '\n';
  body += 'This is a sample mail.\n';
  body += 'Please make sure of this.';
  
  const options = {
		//change the mail addresses with the true them
    cc: 'khinezar70122107@gmail.com',
    name: 'Sending from GAS'  
  };
  
  GmailApp.sendEmail(recipient, subject, body, options);
}