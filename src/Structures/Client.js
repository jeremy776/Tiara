const { AkairoClient, CommandHandler, ListenerHandler } = require('discord-akairo');
const { join } = require('path');
const { Embed } = require('../Utils/Embed')
const Config = require('../config');

module.exports = class TiaraClient extends AkairoClient {
    constructor() {
        super({
            ownerID: Config.ownersID
        }, {
            fetchAllMembers: true,
            partials: ['CHANNELS', 'MESSAGE', 'GUILD_MEMBER'],
            ws: { intents: ['GUILD_MEMBERS', 'GUILDS', 'GUILD_MESSAGES', 'GUILD_VOICE_STATES'] },
        });
        this.api.jov = "https://apijoov-production.up.railway.app";
        this.config = Config;
        this.embed = Embed;
        this.commandHandler = new CommandHandler(this, {
            allowMention: true,
            handleEdits: true,
            commandUtil: true,
            directory: join(__dirname, '..', 'Commands'),
            defaultCooldown: 3000,
            prefix: Config.prefix,
            argumentDefaults: {
                prompt: {
                    timeout: Embed('info', 'Timeout.'),
                    ended: Embed('info', 'Invalid Arguments'),
                    retries: 3,
                    time: 3000
                },
            },
        }).on('commandFinished', (msg, command) => {
            console.info(`[${msg.author.tag}] use command ${command.id}`);
        }).on('missingPermissions', async(msg, command, type, missing) => {
            if(type == 'user') {
                return msg.channel.send(Embed('warn', `You need ${missing} permission to use this command (${command.id})`));
            } else {
                return msg.channel.send(Embed('warn', `Make sure i have ${missing} permission`))
            }
        });
        this.ListenerHandler = new ListenerHandler(this, {
            directory: join(__dirname, '..', 'Listeners')
        });
    }
    run() {
        this.commandHandler.loadAll();
        this.ListenerHandler.loadAll();
        this.login(process.env.TOKEN);
    }
}
