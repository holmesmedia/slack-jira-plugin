# Slack JIRA Plugin

JIRA integration with [slack](http://slack.com).  

It does the following:

1. Automatically append a link to a message whenever there is a mention of a JIRA issue in the message

## Usage

```javascript
git clone https://github.com/gsingers/slack-jira-plugin.git
cd slack-jira-plugin
npm install
```

Write your own configuration file (`config-example.js`) is a good starting point for building your own.

```javascript
***REMOVED***

***REMOVED***
  ***REMOVED***
      showDetailsByDefault: true,//if true, you don't need the '+' to get details
      bot_name: "jira",//Provide the name to post under
      token: 'XXXX-XXXXXXXXXX-XXXXXXXXXX-XXXXXXXXXX-XXXXXX', // https://api.slack.com/web
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
  ***REMOVED***,
        "GRANT": {url:"http://grant.jira.server/jira/browse/"}
***REMOVED***,
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
```

Save this to a file in the root of the project then run your bot with:

    node your-config-file, eg.: node config-gsingers

This will launch the bot in your terminal based on provided configuration.

## Configuration

- `token`: Your Slack API token, get your token at https://api.slack.com/
- `jira_urls`: A mapping of JIRA project names to the URL that can display that JIRA issue, i.e. SOLR -> https://issues.apache.org/jira/browse/
- `projects`: A list of JIRA project names, as in SOLR, MAHOUT, LUCENE
- `post`: If true, then post a new msg, else update the current one
- `verbose`: print logging info
- `emoji`: The emoji to use for the bot.  You may need to create a JIRA emoji for the current one to work, else replace w/ your favorite slack emoji
- `link_separator`: The text to use to separate links in the response.

## TODO:

- Deeper integration w/ the JIRA API
- Optionally restrict to certain config'd channels
