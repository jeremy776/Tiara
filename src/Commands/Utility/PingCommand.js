const { Command } = require('discord-akairo');

module.exports = class PingCommand extends Command {
    constructor() {
        super('ping', {
            aliases: ['ping'],
            description: {
                content: 'Ping Bot ini'
            },
            category: 'Utility',
            cooldown: 3000
        });
    }
    async exec(msg) {
        try {
            const message = await msg.channel.send(`Please wait. Getting info...`);
            const embed = this.client.embed('default')
            .addField('API', `${Math.floor(this.client.ws.ping)} ms`)
            .addField("Latency", `${message.createdTimestamp - msg.createdTimestamp} ms`)
            setTimeout(() => {
                message.edit('', embed)
            }, 2000)
        } catch(e) {
            console.error(e.message);
            msg.channel.send(this.client.embed('warn', `\`\`\`${e.message}\`\`\``))
        }
    }
};
