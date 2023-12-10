function reply_and_forward() {
  
  const recipient = 'khinezar.ncc@gmail.com';
  const q = GmailApp.search(`from:${recipient}`);
  
  //1
  const num = q[0].getMessageCount();
  Logger.log(num);
  q[0].getMessages()[num - 1].replyAll('Got Your Messsage Thanks!')
  
  //q[0].getMessages()[num - 1].forward(recipient);
  
}
/*
reply(body,[options])
replyAll(body,[options])
forward(recipient,[options])
*/
