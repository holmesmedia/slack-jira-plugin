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
    bot_name: "",//Provide the name to post under
    token: 'XXXX-XXXXXXXXXX-XXXXXXXXXX-XXXXXXXXXX-XXXXXX',
  ***REMOVED***
      "SOLR": "https://issues.apache.org/jira/browse/",
      "GRANT": "http://grant.jira.server/jira/browse/",
      "DEFAULT": "https://default.jira.server/browse/"
***REMOVED***
    // The first capturing group is the whole issue ID, the second group is the project name
    pattern: /(?:\W|^)((SOLR|GRANT|BOB)-\d+)(?:(?!\W)|$)/g, //NOTE this assumes all JIRA issues are like: PROJECT-1234
  ***REMOVED*** //If true, than post a new message instead of updating the current message
  ***REMOVED***
    emoji: ":jira:",
    link_separator: ", "// use \n if you want new lines
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
- `pattern`: A JS Regexp that can identify JIRA issues in text, e.g. /(SOLR)-\d+/g

## TODO:

- Deeper integration w/ the JIRA API
- Optionally restrict to certain config'd channels
