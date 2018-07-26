const Discord = require("discord.js");
const snow = require("../snow.json");

const encode = require("strict-uri-encode");

module.exports.run = async (bot, message, args) => {

    let prefix = snow.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0].toLocaleLowerCase();

    if(cmd === `${prefix}youtube`) {

        let youtube = encode(args.join(" "));
        if(!youtube) return message.channel.send("PLEASE ENTER A SEARCH QUERY TO SEARCH ON YOUTUBE WITH**!**");

        let youtubelink = `https://youtube.com/results?q${youtube}`;

        message.channel.send("SEARCHING ON YOUTUBE **...**").then((youtubeMessage) => {

            youtubeMessage.edit("**FINISHED!**\n" + `<${youtubelink}>`);

        });

    }

}

module.exports.help = {
    name: "youtube"
}