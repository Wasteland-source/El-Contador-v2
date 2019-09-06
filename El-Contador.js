const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json')
const config = require('./Config.json')
//Bring's discord.js, Starts up a dicord client for the bot and saves the token as well as brings up my config file
const calculator = require('./BotCalculator.js')
//Imports different commands

client.on('ready', function() {
  console.log(`Successfully logged in as ${client.user.tag}`);
  console.log(`${client.user.tag} is currently connected to ${client.guilds.size} servers`)
});
//Display's a log in message when El Contador logs in

client.on('message', function(msg) {
  if (msg.content === 'ping') {
    try {
      msg.channel.send(`You fucking animal, you absolute fuck, you think i\'m some kinda play thing for you to ping? Were you expecting pong? You stupid little cream filled bitch. Don\'t ever talk to me again. This ping took ${client.ping} milliseconds`)
      console.log(`${msg.author.tag} has sent a ping and recieved a pong`);
    } catch (error) {
      console.log(`${msg.author.tag} broke my sweet wee ping pong`);
    }
  }
});
//Reply's to a string with another string and logs success and failure

client.login(auth.token);
//Logs into the Discord client with the login token

client.on('message', function(msg) {
  if (msg.content.startsWith('~')) {
    try {
      msg.channel.send(calculator.calc(msg.content))
      console.log(`${msg.author.tag} made a calculation`);
    } catch (error) {
      console.log(`${msg.author.tag} broke the calculator`);
    }
  }
});
//Calls calculator and logs success and failure
