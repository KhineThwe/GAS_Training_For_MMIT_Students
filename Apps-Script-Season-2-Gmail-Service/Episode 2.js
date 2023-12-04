function thread_fun() {
  try {
    //const inbox_threads = GmailApp.getInboxThreads(0, 2);
    const inbox_threads =  GmailApp.getInboxThreads();
    const starred_threads = GmailApp.getStarredThreads();
    const spam_threads = GmailApp.getSpamThreads();
    const trash_threads = GmailApp.getTrashThreads();
    const chat_threads = GmailApp.getChatThreads();

    const misc_label = GmailApp.getUserLabelByName('Miscs');
    const misc_threads = misc_label ? misc_label.getThreads() : [];

    Logger.log(`Inbox Length: ${inbox_threads.length}. ${inbox_threads}`);
    Logger.log(`Starred Length: ${starred_threads.length}. ${starred_threads}`);
    Logger.log(`Spam Length: ${spam_threads.length}. ${spam_threads}`);
    Logger.log(`Trash Length: ${trash_threads.length}. ${trash_threads}`);
    Logger.log(`Chat Length: ${chat_threads.length}. ${chat_threads}`);
    Logger.log(`Miscs Length: ${misc_threads.length}. ${misc_threads}`);
  } catch (error) {
    console.error('Error:', error);
  }
}

/*
  Logger.log(`Inbox Length: ${inbox_threads.length}. ${inbox_threads}`);
  Logger.log(`Starred Length: ${starred_threads.length}. ${starred_threads}`);
  Logger.log(`Spam Length: ${spam_threads.length}. ${spam_threads}`);
  Logger.log(`Trash Length: ${trash_threads.length}. ${trash_threads}`);
  Logger.log(`Chat Length: ${chat_threads.length}. ${chat_threads}`);
  Logger.log(`Misc Length: ${misc_threads.length}. ${misc_threads}`);
*/

/*
Top 6 Methods
  ------------------
  getInBoxThreads([start,max])
  getStarredThreads([start,max])
  getSpamThreads([start,max])
  getTrashThreads([start,max])
  getChatThreads([start,max])
  getThreads([start,max])
*/
