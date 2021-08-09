const { Command } = require("discord-akairo");

module.exports = class DompetCommand extends Command {
  constructor() {
    super("dompet", {
      aliases: ["dompet", "wallet", "balance", "bal"],
      cooldown: 3000,
      category: "Economy",
      description: {
        content: "cek isi dompet kamu atau orang lain"
      },
      args: [
        {
          id: "user",
          type: "user",
          match: "phrase",
          default: m => m.author
        }
      ]
    })
  }

  async exec(msg) {
    let embed = this.client.embed("default")
    .setAuthor(`Isi dompet dari ${user.username}`, user.displayAvatarURL({dynamic: trie}));

    let data = await this.client.accountDB(msg.author.id);
    if(!data) {
      embed.setDescription(`**Uang**: Rp.**0**\n**Bank**: Rp.**0**`);
      return msg.channel.send(embed)
    }
  }
}
