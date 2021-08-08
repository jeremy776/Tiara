const { Command } = require("discord-akairo");

module.exports = class ScreenShoot extends Command {
  constructor() {
    super("screenshoot", {
      aliases: ["screenshoot", "screen-shoot", "ss"],
      description: {
        content: "Mengambil gambar web"
      }
      cooldown: 3000,
      category: "Fun"
    });
  }

  async exec(msg) {
    try {
      let baseURL = this.client.api.joov + "/v1/info/ss?web=google.com";
      let embed = this.client.embed("default")
      .setImage(baseUrl);
      return msg.channel.send(embed);
    } catch(e) {
      return msg.channel.send(`\`\`\`js\n${e.message}\`\`\``);
    }
  }
}
