const { Listener } = require('discord-akairo');

module.exports = class ReadyEvents extends Listener {
    constructor() {
        super('ready', {
            emitter: 'client',
            category: 'client',
            event: 'ready'
        });
    }

    exec() {
      console.log(`Bot online: ${this.client.user.username}`);
      this.client.user.setActivity(`In ${this.client.guilds.cache.size} Serves`, {type: "WATCHING"});
    }
}
