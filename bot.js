const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("562763282650234881")
setInterval(function() {
channel.send(`SUB 2 DILK`);
}, 30)
})

client.login(process.env.BOT_TOKEN);