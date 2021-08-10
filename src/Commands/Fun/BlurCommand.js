const { Command } = require('discord-akairo');

module.exports = class DiscordBlackCommand extends Command {
  constructor() {
    super("blur", {
      aliases: ['blur'],
      category: 'Fun',
      cooldown: 3000,
      description: {
        content: 'blur avatar user'
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
      let baseURL = this.client.apijov + '/v1/canvas/blur?image='+user.displayAvatarURL({format: 'png', size: 2048});
      let message = await msg.channel.send('Mohon tunggu...');
      return msg.channel.send({files:[{attachment:baseURL, name:'blur-.png'}]}).then(a => message.delete());
    } catch(e) {
      return msg.channel.send(`\`\`\`js\n${e.message}\`\`\``);
    }
  }
}
