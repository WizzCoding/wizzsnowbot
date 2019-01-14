const Discord = require("discord.js");
const snow = require("../snow.json");

const convert = require("color-convert");

module.exports.run = async (bot, message, args) => {

    let color = "000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);}).toLocaleLowerCase();

    let randomcolorEmbed = new Discord.RichEmbed()
    .setColor(`#${color}`)
    .setAuthor(`#${color.toUpperCase()}`, `https://dummyimage.com/250/${color}/&text=%20`)
    .setDescription(`[**[ INFORMATION ]**](https://colorhexa.com/${color})` + "\n\n" + `**RGB**\n${convert.hex.rgb(color)}\n\n**HSL**\n${convert.hex.hsl(color)}\n\n**CSS**\n${convert.hex.keyword(color).toUpperCase()}`)
    .setFooter("RANDOM COLOR | SNOW " + snow.snowflake, bot.user.displayAvatarURL);

    message.channel.send(randomcolorEmbed);

}

module.exports.help = {
    name: "randomcolor"
}
