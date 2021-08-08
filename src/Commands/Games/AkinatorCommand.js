const { Command } = require("discord-akairo");
const Akinator = require("discord.js-akinator");

module.exports = class AkinatorCommand extends Command {
  constructor() {
    super("akinator", {
      aliases: ["akinator"],
      description: {
        content: "Memainkan akinator."
      },
      category: "Games",
      cooldown: 3000
    })
  }

  async exec(msg) {
    Akinator(msg, this.client, "id");
  }
}
