const { Command } = require("discord-akairo");

module.exports = class HelpCommand extends Command {
  constructor() {
    super('help', {
      aliases: ['help'],
      description: {
        content: 'Daftar command yang tersedia di bot ini',
      },
      category: 'Utility',
      cooldown: 3000,
      args: [
        {
          id: 'command',
          type: 'commandAlias',
        },
      ],
    });
  }

  async exec(msg, { command }) {
    try {
      if (!command) {
        const embed = this.client.embed('default', `>>> Hallo **${msg.author.username}**, Saya **${this.client.user.username}** dan berasal dari **Indonesia**, berikut adalah beberapa command yang bisa di gunakan. Ketik **${this.client.config.prefix}command** untuk menjalankan command, ketik **${this.client.config.prefix}help nama_command** untuk mendapatkan informasi tentang command.\nPrefix: **${this.client.config.prefix}**`)
          .setAuthor(this.client.user.username + " List Commands")
        for (const category of this.handler.categories.values()) {
          embed.addField(category, `${category.filter((cmd) => cmd.aliases.length > 0).map((cmd) => `**\`${cmd.aliases[0]}\`**`).join(', ')}`);
        }
        return msg.channel.send(embed);
      }
      const embed = this.client.embed('default')
        .addField('Description', `${command.description.content ? command.description.content : ''} ${command.description.ownerOnly ? '\n**[Owner Only]**' : ''}`)
        .addField('Alias', command.aliases.length > 1 ? `\`${command.aliases.join('`, `')}\`` : 'None.', true)
      return msg.channel.send(embed);
    } catch (e) {
      return msg.channel.send(this.client.Embed('warn', e.message));
    }
  }
};
