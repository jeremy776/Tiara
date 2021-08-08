const { Command } = require("discord.js");

module.exports = class TebakGambarCommand extends Command {
  constructor() {
    super("tebak-gambar", {
      aliases: ["tebak-gambar", "tebakgambar", "tb"],
      description: {
        content: "Mainkan tebak gambar untuk mengasah otak"
      },
      category: "Games"
    }
  }

  async exec(msg) {
    return msg.channel.send("g");
  }
}
