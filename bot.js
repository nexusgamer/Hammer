const Discord = require("discord.js");
const client = new Discord.Client();
client.on("ready", () => {
  console.log("I am online");
  client.user.setPresence({
    activity: {
      name: ".invite and .help",
      type: "WATCHING"
    }
  });
});

client.on("message", async message => {
  let command = message.content;
  if (message.author.bot) return;
  var prefix = ".";
  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);

  if (message.content.startsWith(`${prefix}ping`)) {
    const start = Date.now();
    let msg1 = await message.channel.send("Pinging...");
    const end = Date.now();
    msg1.edit(`Bot's ping: ${client.ws.ping}`);
  }
  });
  
  client.login(process.env.token);
