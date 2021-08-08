const { Command } = require("discord-akairo");
const translate = require("translatte");
const axios = require("axios");

module.exports = class QuoteCommands extends Command {
  constructor() {
    super("quote", {
      aliases: ["quote"],
      cooldown: 5000,
      category: "Fun",
      description: {
        content: "Memberikan quote terkenal"
      }
    })
  }

  async exec(msg) {
    try {
      const baseURL = await axios.get(`${this.client.apijov}/v1/fun/quote`);
      //translate(baseURL.data.content, {to: "id"}).then(res => {
        return msg.channel.send(this.client.embed("default", `***"${baseURL.data.content}"***\n\n*- ${baseURL.data.author}*`));
      /*}).catch(e => {
        return msg.channel.send(`\`\`\`js\n${e.message}\`\`\``);
      });*/
    } catch(e) {
      return msg.channel.send(`\`\`\`js\n${e.message}\`\`\``);
    }
  }
}
