const Discord = require("discord.js");
const snow = require("../snow.json");

let prefix = snow.prefix;

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("DEAFEN_MEMBERS")) return message.channel.send("YOU DO NOT HAVE PERMISSIONS TO DO THAT**!**");

    if(!args[0]) return message.channel.send("PLEASE MENTION A USER YOU WANT TO UNDEAFEN**!**");

    let udUser = message.guild.member(message.mentions.members.first() || message.guild.members.get(args[0]));
    if(!udUser) return message.channel.send("CAN'T FIND USER**!**");
    if(udUser.highestRole.position >= message.member.highestRole.position) return message.channel.send("YOU CAN NOT UNMUTE A MEMBER WHO HAS A HIGHER OR THE SAME ROLE AS YOU**!**");

    let undeafenrole = message.guild.roles.find(r => r.name === "DEAFENED // " + snow.snowflake);

    if(!undeafenrole || !udUser.roles.has(undeafenrole.id)) return message.channel.send("THIS USER IS NOT DEAFENED**!**");

    await(udUser.removeRole(undeafenrole.id));
    message.channel.send(`${udUser} HAS BEEN **UNDEAFENED!**`);

    let undeafenEmbed = new Discord.RichEmbed()
    .setColor(snow.blue)
    .setTimestamp()
    .setDescription("UNDEAFAEN **" + snow.snowflake + "**")
    .addField("USER", udUser)
    .addField("MODERATOR", message.author)
    .addField("CHANNEL", message.channel)
    .setFooter("SNOW " + snow.snowflake, bot.user.displayAvatarURL);

    let snowlog = message.guild.channels.find(`name`, "snow");
    if(!snowlog) return;

    snowlog.send(undeafenEmbed);

}

module.exports.help = {
    name: "undeafen"
}
