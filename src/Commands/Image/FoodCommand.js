const { Command } = require("discord-akairo");
const axios = require("axios");

module.exports = class FoodCommand extends Command {
  constructor() {
    super("food", {
      aliases: ["food"],
      category: "Fun",
      cooldown: 2000,
      description: {
        content: "Memberikan random gambar makanan"
      }
    })
  }

  async exec(msg) {
    try {
      let baseURL = this.client.apijov + "/v1/info/food";
      let message = await msg.channel.send("Mengambil gambar...");
      return msg.channel.send({files:[{attachment:baseURL, name:"makanan.png"}]}).then(x => message.delete());
    } catch(e) {
      return msg.channel.send(`\`\`\`js\n${e.message}\`\`\``);
    }
  }
}
