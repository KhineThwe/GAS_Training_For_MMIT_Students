function two_point_two() {
  const threads = GmailApp.getInboxThreads(0, 3);  
  
  for (const thread of threads) {
    console.log(thread.getFirstMessageSubject());
  }

  const threads_1 = GmailApp.getInboxThreads(0, 1);
  const id = threads_1[0].getId();

  const thread_1 = GmailApp.getThreadById(id);
  console.log(thread_1.getFirstMessageSubject()); //Sample mail
}