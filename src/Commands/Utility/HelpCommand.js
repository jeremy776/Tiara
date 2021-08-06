const { Command } = require("discord-akairo");

module.exports = class HelpCommand extends Command {
  constructor() {
    super('help', {
      aliases: ['help'],
      description: {
        content: 'Get list command',
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
        const embed = this.client.embed('default', `>>> Hi **${msg.author.username}**, I'm **${this.client.user.username}**, I'm from **Indonesia**, here are the commands I have, you can run the command with **${this.client.config.prefix}name_command**, and for more command info please type **${this.client.config.prefix}help name_command**\nPrefix: **${this.client.config.prefix}**`)
          .setAuthor(this.client.user.username + " List Commands")
        for (const category of this.handler.categories.values()) {
          embed.addField(category, `${category.filter((cmd) => cmd.aliases.length > 0).map((cmd) => `**\`${cmd.aliases[0]}\`**`).join(', ')}`);
        }
        return msg.channel.send(embed);
      }
      const embed = this.client.embed('default')
        .addField('Description', `${command.description.content ? command.description.content : ''} ${command.description.ownerOnly ? '\n**[Owner Only]**' : ''}`)
        .addField('Alias', command.aliases.length > 1 ? `\`${command.aliases.join('` `')}\`` : 'None.', true)
        //.addField('Examples', command.description.examples && command.description.examples.length ? `\`${command.aliases[0]} ${command.description.examples.join(`\`\n\`${command.aliases[0]} `)}\`` : 'None.');
      return msg.channel.send(embed);
    } catch (e) {
      //this.client.logger.error(e.message);
      return msg.channel.send(this.client.Embed('warn', e.message));
    }
  }
};
