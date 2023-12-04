function myotherotherFunction() {
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
