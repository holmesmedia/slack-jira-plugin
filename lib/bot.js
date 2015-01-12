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

Bot.prototype.run = function(){
  var self = this;
  var bot = new slackbot(this.config.token);
  bot.use(function (message, cb) {

    if ('message' == message.type && message.text != null) {
      if (message.text.indexOf("GRANT-") != -1){
        //console.log(self.config.channels[0]);
        console.log(message.user + ' said: ' + message.text);

        var jiraIssue = message.text.match(self.config.pattern);
        var appends = "";
        _.each(jiraIssue, function(jira){
          appends += " " + self.config.jira_url + jira;
  ***REMOVED***);
         self.slacker.send('chat.update', {
            channel: message.channel,
            text: message.text + " | Links: " + appends,
            ts: message.ts
  ***REMOVED***);
***REMOVED***
    }
    cb();
  });
  bot.connect();
***REMOVED***


exports = module.exports.Bot = Bot;
