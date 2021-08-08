const { Command } = require("discord-akairo");
const akinator = require("discord.js-akinator");

module.exports = class AkinatorCommand extends Command {
  constructor() {
    super("akinator", {
      aliases: ["akinator"],
      description: {
        content: "Mainkan tebak gambar untuk mengasah otak"
      },
      category: "Games",
      cooldown: 1000
    })
  }

  async exec(msg) {
    return Akinator(msg, this.client, "id");
  }
}
