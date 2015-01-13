var _ = require('underscore');
var slack = require('./slacker');
var jira = require('jira');
var slackbot = require('node-slackbot');
/**
 * Slackbot to integrate JIRA.
 *
 * The main thing it does right now is auto-expand links, but since we are bringing in the JIRA plugin, there is more it can do
 *
 * See config-example.js for configuration
 *
 * To run:  node config-XXX.js   (where XXX is the name of your config
 *
 * See:
 * https://www.npmjs.com/package/node-slackbot
 * https://www.npmjs.com/package/jira
 */
var Bot = function (config) {
  var self = this;
  this.config = _.defaults(config, {
    silent: false,
    nick: 'slckbt',
    username: 'slckbt'
  });

  this.slacker = new slack.Slacker({ token: this.config.token });
  return this;
***REMOVED***

Bot.prototype.run = function () {
  var self = this;
  var verbose = self.config.verbose;
  var bot = new slackbot(this.config.token);
  bot.use(function (message, cb) {
    if ('message' == message.type && message.text != null && message.subtype != "bot_message") {
      if (verbose){
        console.log(message);
***REMOVED***
      var jiraIssue = message.text.match(self.config.pattern);
      var text = message.text;
      var changed = jiraIssue != null && jiraIssue.length > 0;
      var links = "";
      _.each(jiraIssue, function (jira, index, list) {
        var prjName = jira.substring(0, jira.indexOf("-"));//NOTE this assumes all JIRA issues are like: PROJECT_NAME-1234
        var url;
        var configUrl = "";
        if (self.config.jira_urls[prjName]) {
          configUrl = self.config.jira_urls[prjName];
  ***REMOVED*** else {
          configUrl = self.config.jira_urls["DEFAULT"];
  ***REMOVED***
        url = configUrl + jira;
        links +=  url;
        if (index != list.length -1){
          links += self.config.link_separator;
  ***REMOVED***
***REMOVED***);
      text += "\n\t>>> JIRA: " + links;
      if (changed) {
        if (verbose) {//TODO: replace w/ better logging
          console.log(message.user + ' said: ' + message.text + " and replaced: " + text);
  ***REMOVED***

        if (self.config.post == true) {
          self.slacker.send('chat.postMessage', {
            channel: message.channel,
            parse: "full",
            text: "\t" + links,
            username: self.config.bot_name,
            unfurl_links: false,
            link_names: 1,
            icon_emoji: self.config.emoji
    ***REMOVED***);
  ***REMOVED*** else {
          self.slacker.send('chat.update', {
            channel: message.channel,
            parse: "full",
            text: text,
            ts: message.ts
    ***REMOVED***);
  ***REMOVED***
***REMOVED***
    }
    cb();
  });
  bot.connect();
***REMOVED***


exports = module.exports.Bot = Bot;
