var request = require('request');

/**
 * Slack API wrapper
 * @param {object} config Slacker configuration
 * - token: Slack API token
 */
var Slacker = function (config) {
  this.token = config.token;
  return this;
***REMOVED***

/**
 * Send slack API request
 * @param  {string} method Slack API method
 * @param  {object} paramString the GET params
 */
Slacker.prototype.get = function (method, paramString) {
  if (!paramString){
    paramString = "?";
  }
  paramString += "&token=" + this.token;
  console.log("get: " + paramString);
  return request.get({
    url: 'https://slack.com/api/' + method + paramString,
    json: true
  });
***REMOVED***

Slacker.prototype.send = function (method, args) {
  args = args || {***REMOVED***
  args.token = this.token;
  request.post({
    url: 'https://slack.com/api/' + method,
    json: true,
    form: args
***REMOVED*** function (error, response, body) {
    if (error || !body.ok) {
      console.log('Error Sending:', error || body.error);
    }
  });
***REMOVED***

exports.Slacker = Slacker;
