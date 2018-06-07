const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const urban = require("relevant-urban");

module.exports.run = async (bot, message, args) => {

    let prefix = botconfig.prefix;
    let messageArary = message.content.split(" ");
    let cmd = messageArary[0].toLocaleLowerCase();

     // URBAN DICTIONARY COMMAND
     if(cmd === `${prefix}urban`) {

        if(!args[0]) return message.channel.send("PLEASE ENTER AN ARGUMENT TO SEARCH FOR IN THE URBAN DICTIONARY**!**");
         
        message.channel.send("SEARCHING IN THE URBAN DICTIONARY DATABASE **...**").then(urbanmessage => {
    
        let res = await urban(args.join(" ")).catch(e => {
            return urbanmessage.edit("COULDN'T FIND THAT WORD IN THE URBAN DICTIONARY DATABASE**!**");
            return;
        });
    
        let urbanEmbed = new Discord.RichEmbed()
        .setColor(botconfig.blue)
        .setTitle("URBAN DICTIONARY ❆")
        .setDescription("**" + res.word + `**\n\n**DEFINITION:**\n${res.definition}`)
        .addField("EXAMPLE", res.example)
        .addField("UPVOTES ⇑", res.thumbsUp)
        .addField("DOWNVOTES ⇓", res.thumbsDown)
        .addField("WRITTEN BY", res.author)
        .setFooter("URBAN DICTIONARY | SNOW ❆", bot.user.displayAvatarURL);
    
        if (!res.catch) return urbanmessage.edit(urbanEmbed);
    
    });
    
        } 

}

module.exports.help = {
    name: "urban"
}
