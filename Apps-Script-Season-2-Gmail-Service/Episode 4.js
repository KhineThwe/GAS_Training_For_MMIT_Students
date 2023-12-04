function search() {
  
  const q = GmailApp.search('from:Thinzar Tun');
  //const q = GmailApp.search('from:Thinzar Tun', 0, 1);
  Logger.log(q);
  
}
/*
search(query,[start,max]->optional)
*/
