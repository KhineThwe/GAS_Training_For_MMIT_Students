function search() {
  
  const q = GmailApp.search('from:Thinzar Tun');
  //const q = GmailApp.search('from:Thinzar Tun', 0, 1);
  Logger.log(q);

  for (const thread of q) {
    console.log(thread.getFirstMessageSubject());
  }
}
/*
search(query,[start,max]->optional)
*/
