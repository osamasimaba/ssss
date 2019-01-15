const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("534809542177980417")
setInterval(function() {
channel.send(` مافيا مافيا مافيا `);
}, 30)
})

client.login(process.env.BOT_TOKEN);
