const { Command } = require("discord-akairo");

module.exports = class AvatarCommand extends Command {
  constructor() {
    super("avatar", {
      aliases: ["avatar", "av"],
      category: "Utility",
      description: {
        content: "Melihat avatar dari user/member lain"
      },
      
    })
  }
}
