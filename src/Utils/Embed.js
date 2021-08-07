/** CODE BY https://github.com/zhycorp/disc-11/blob/main/src/utils/createEmbed.t */
const { MessageEmbed } = require('discord.js');
const { prefix } = require('../config.js');

const ListColors = {
    info: '#191C25',
    warn: "YELLOW",
    error: "RED",
    default: '#7289DA'
}
function Embed(color, message) {
    const embed = new MessageEmbed()
    .setColor(ListColors[color])
    .setTimestamp()
    //.setFooter(`${prefix}help [command] • Tiara Bot`);
    if(message) embed.setDescription(message);
    return embed;
}

module.exports = { Embed };
