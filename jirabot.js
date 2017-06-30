var slackbot = require('./lib/bot');

var config = {

  showIssueDetails: true,
  //showIssueDetails: true,
  //issueDetailsToShow: {'fields.summary':1 , 'fields.assignee' : 1, 'fields.creator' : 0, 'fields.description': 0},
  issueDetailsToShow: {'fields.summary':1 , 'fields.assignee' : 1, 'fields.creator' : 0, 'fields.description': 0},
  showDetailsByDefault: true, // false does not work unfortunately
  //showDetailsByDefault: true, //if true, you don't need the '+' to get details
  bot_name: "jirabot",//Provide the name to post under
  token: process.env.slackToken,
  jira_urls: {
    // DEFAULT NODE IS REQUIRED.
    "DEFAULT": {
      url: "https://holmesmedia.atlassian.net/browse/",
      jira: {
        user: process.env.jiraUser, // be sure to use the username, not the user email
        password: process.env.jiraPass,
        host: 'holmesmedia.atlassian.net',
        protocol: 'https',
        port: 443,
        version: 'latest',
        verbose: true,
        strictSSL: true
      }
    },
  },
  search_cmd: "no_searching_allowed",
  // search_cmd: "search",
  //Since search results can be verbose, you may not want to muddy the channel
  search_output_chan: "this",//if the value is "this", then the current channel will be used, else the name of a channel
  projects: ["BGAR", "GRA", "BG", "HM", "HHG", "ID", "IT" "LG", "RG", "SG", "TA", "T3", "WC", "WG"],
  post: true,
  verbose: true,
  custom_texts: {
    messagePrefix: "" //message you might like to prefix to JiraBot's post
  },
  emoji: ":jira:", // be sure to upload your custom emoji in slack
  link_separator: " - ",// use \n if you want new lines
  error_channel: 'jirabot-testing' //the id of the channel to send low level log errors.  If not defined, will use the current channel
};

//DO NOT EDIT BELOW HERE
var slackbot = new slackbot.Bot(config);
slackbot.run();
