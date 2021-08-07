const { Command } = require("discord-akairo");

module.exports = class EvalCommand extends Command {
  constructor() {
    super('eval', {
      aliases: ["eval", "ev"],
      ownerOnly: true,
      description: {
        content: "nah"
      },
      category:"Owner",
      args: [
        {
          id:"args",
          match:'restContent',
          type:'string'
        }
      ],
    });
  }
  
  async exec(msg, { args }) {
    
    try {
      if(!args) {
        throw new TypeError('Eval commad cannot execute without input')
      }
      let code = args
      let depth =  0;
      /*if(flags.includes('async')) {
        code = `(async() => { ${code} })()`;
      }*/

      let { evals, type } = await parseEval(eval(code)); /* eslint-disable-line */
      if(typeof  evals !== 'string') evals = require('util').inspect(evals, { depth })
      //if(flags.includes('silent')) return;
      /*evals = evals
      .replace(/`/g, `\`${String.fromCharCode(8203)}`)
      .replace(/@/g, `@${String.fromCharCode(8203)}`);
      */

      return msg.channel.send(this.client.embed('default', `\`\`\`js\n${evals}\`\`\``))

    }catch(err){
      const error = this.client.embed('error', `\`\`\`js\n${err}\`\`\``)
      return msg.channel.send(error)
    }
    
  }
}

async function parseEval(input) {
  const isPromise = input instanceof Promise && typeof input.then == "function" && typeof input.catch == "function";
  if(isPromise) {
    input = await input;
    return {
      evals: input,
      type: `Promise<${parseType(input)}>`
    };
  }
  return {
    evals: input,
    type: parseType(input)
  };
}

function parseType(input) {
  if(input instanceof Buffer) {
    let length = Math.round(input.length / 1024 / 1024);
    let ic = "MB";
    if(!length) {
      length = Math.round(input.length / 1024);
      ic = "KB";
    }
    if(!length) {
      length = Math.round(input.length);
      ic = "Bytes";
    }
    return `Buffer (${length} ${ic})`
  }
  return input === null || input === undefined ? "Void" : input.constructor.name;
}
