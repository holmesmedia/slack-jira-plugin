***REMOVED***

***REMOVED***
    bot_name: "",//Provide the name to post under
    token: 'XXXX-XXXXXXXXXX-XXXXXXXXXX-XXXXXXXXXX-XXXXXX',
  ***REMOVED***
      "SOLR": "https://issues.apache.org/jira/browse/",
      "GRANT": "http://grant.jira.server/jira/browse/",
      "DEFAULT": "https://default.jira.server/browse/"
***REMOVED***
    // The first capturing group is the whole issue ID, the second group is the project name  
    pattern: /(?:\W|^)((SOLR|GRANT|BOB)-\d+)(?:(?!\W)|$)/g, //NOTE this assumes all JIRA issues are like: PROJECT-1234
  ***REMOVED*** //If true, than post a new message instead of updating the current
  ***REMOVED***
    emoji: ":jira:",
    link_separator: ", "// use \n if you want new lines
***REMOVED***

***REMOVED***
***REMOVED***
***REMOVED***
