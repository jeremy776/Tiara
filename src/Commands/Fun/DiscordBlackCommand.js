const { Command } = require('discord-akairo');

module.exports = class DiscordBlackCommand extends Command {
  constructor() {
    super("discordblack", {
      aliases: ['discord-black', 'discordblack'],
      category: 'Fun',
      cooldown: 3000,
      description: {
        content: 'discord black dengan avatar user'
      },
      args: [
        {
          id: 'user',
          match: 'phrase',
          type: 'user',
          default: m => m.author
        }
      ]
    })
  }
  async exec(msg, { user }) {
    try {
      let baseURL = this.client.apijoov + '/v1/canvas/discordblack?image='+user.displayAvatarURL({format: 'png', size: 2048});
      let message = await msg.channel.send('Mohon tunggu...');
      return msg.channel.send({files:[{attachment:baseURL, name:'black-.png'}]}).then(a => message.delete());
    } catch(e) {
      return msg.channel.send(`\`\`\`js\n${e.message}\`\`\``);
    }
  }
}
