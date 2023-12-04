function myotherotherFunction() {
  /*Exceptional Handling*/
  try {
    const fileName = 'みんなの日本語';
    const files = DriveApp.getFilesByName(fileName);
    
    if (files.hasNext()) {
      const file = files.next();
      
      GmailApp.sendEmail('khinezar.ncc@gmail.com', 'Hello, from Apps Script!', 'This is a test email', {
        attachments: [file],
        cc: 'khinezar70122107@gmail.com',
        name: 'Khine Zar Thwe'
      });
    } else {
      console.error('File not found:', fileName);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

/*
optionals arg:
-----------------------------------------
cc:A string containing comma-separated email addresses to be added to the "cc" (carbon copy) field of the email.
bcc:A string containing comma-separated email addresses to be added to the "bcc" (blind carbon copy) field of the email.
attachments:An array of BlobSource objects (e.g., files, images) to be attached to the email.
htmlBody:A string containing the HTML version of the email body. If provided, the email will be sent as a multipart/alternative message, with both plain text and HTML versions.
name:A string representing the sender's name, which will be displayed in the "From" field of the email. If not provided, the sender's name will be the default name associated with the user's Gmail account.
noReply:A boolean value that, if set to true, will make the email appear to be sent from a "no-reply" address, preventing recipients from replying to the message.
replyTo:A string containing an email address to be used as the "Reply-To" address for the email. If a recipient replies to the email, this address will receive the reply.
inlineImages:A JavaScript object containing key-value pairs of image names and BlobSource objects. The images can be referenced by their names in the "htmlBody" of the email using the "cid" (Content ID) notation (e.g., <img src="cid:imageName">).*/
