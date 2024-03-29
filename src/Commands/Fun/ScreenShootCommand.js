const { Command } = require("discord-akairo");

module.exports = class ScreenShoot extends Command {
  constructor() {
    super("screenshoot", {
      aliases: ["screenshoot", "screen-shoot", "ss"],
      description: {
        content: "Mengambil gambar web"
      },
      args: [
        {
          id: "url"
        }
      ],
      cooldown: 3000,
      category: "Fun"
    });
  }

  async exec(msg, { url }) {
    try {
      let baseURL = this.client.apijov + "/v1/info/ss?web="+url;
      let embed = this.client.embed("default")
      .setImage(baseURL);
      let message = await msg.channel.send("Mengambil gambar...");
      return msg.channel.send({ files: [{attachment:baseURL, name:"screenshoot.png"}] }).then(x => message.delete())
    } catch(e) {
      return msg.channel.send(`\`\`\`js\n${e.message}\`\`\``);
    }
  }
}
