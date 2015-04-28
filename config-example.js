***REMOVED***

***REMOVED***

***REMOVED***
  showDetailsByDefault: true,//if true, you don't need the '+' to get details
  bot_name: "jira",//Provide the name to post under
  token: 'XXXX-XXXXXXXXXX-XXXXXXXXXX-XXXXXXXXXX-XXXXXX',
***REMOVED***
***REMOVED***
***REMOVED***url: "https://default.jira.server/browse/"},
    // These should match projects from the projects property where you want to use a configuration other than the default
    "SOLR": {
      url: "https://issues.apache.org/jira/browse/",
***REMOVED***
        user: 'username', // be sure to use the username, not the user email
        password: 'password',
        host: 'hostname',
***REMOVED***
***REMOVED***
        version: '2',
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
    "GRANT": {url:"http://grant.jira.server/jira/browse/"}
***REMOVED***
  search_cmd: "search",
***REMOVED***
  search_output_chan: "C02U1L9KZ",//if the value is "this", then the current channel will be used, else the name of a channel
  projects: ["REPLACE", "ME", "WITH", "YOUR", "PROJECT", "NAMES", "GRANT", "SOLR"],
***REMOVED***
***REMOVED***
***REMOVED***
  link_separator: ", ",// use \n if you want new lines
  error_channel: '' //the id of the channel to send low level log errors.  If not defined, will use the current channel
***REMOVED***

***REMOVED***
***REMOVED***
***REMOVED***
