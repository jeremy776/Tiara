/** CODE BY https://github.com/zhycorp/disc-11/blob/main/src/utils/createEmbed.t */
const { MessageEmbed } = require('discord.js');
const { prefix } = require('../config.js');

const ListColors = {
    info: 'YELLOW',
    warn: "RED",
    default: '#7289DA'
}
function Embed(color, message) {
    const embed = new MessageEmbed()
    .setColor(ListColors[color])
    .setFooter('Night Rest');
    if(message) embed.setDescription(message);
    return embed;
}

module.exports = { Embed };