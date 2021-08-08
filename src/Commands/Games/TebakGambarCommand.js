const { Command } = require("discord-akairo");

module.exports = class TebakGambarCommand extends Command {
  constructor() {
    super("tebak-gambar", {
      aliases: ["tebak-gambar", "tebakgambar", "tb"],
      description: {
        content: "Mainkan tebak gambar untuk mengasah otak"
      },
      category: "Games",
      cooldown: 15000
    })
  }

  async exec(msg) {
    return msg.channel.send("g");
  }
}
