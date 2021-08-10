const { Command } = require('discord-akairo');

module.exports = class GayCommand extends Command {
  constructor() {
    super("gay", {
      aliases: ['gay'],
      category: 'Image',
      cooldown: 3000,
      description: {
        content: 'jangan gay, gk baik tau'
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
      let baseURL = this.client.apijov + '/v1/canvas/gay?image='+user.displayAvatarURL({format: 'png', size: 2048});
      let message = await msg.channel.send('Mohon tunggu...');
      return msg.channel.send({files:[{attachment:baseURL, name:'gay.png'}]}).then(a => message.delete());
    } catch(e) {
      return msg.channel.send(`\`\`\`js\n${e.message}\`\`\``);
    }
  }
}
