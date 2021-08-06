const { Command } = require("discord-akairo");

module.exports = class AvatarCommand extends Command {
  constructor() {
    super("avatar", {
      aliases: ["avatar", "av"],
      category: "Utility",
      description: {
        content: "Melihat avatar dari user/member lain"
      },
      cooldown: 3000,
      args: [
        {
          id: "user",
          match: "phrase",
          default: m => m.author
        }
      ]
    });
  }

  async exec(msg, {user}) {

    let embed = this.client.embed("default")
    .setImage(user.displayAvatarURL)
    .setAuthor(`Avatar from ${user}`)
    return msg.channel.send(embed);

  }
}
