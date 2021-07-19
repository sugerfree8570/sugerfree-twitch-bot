
module.exports = {

    parseCmdArg: function (msg) {
        // parse arg and commands
        const args = msg.slice(1).split(' ');
        const cmd = args.shift().toLowerCase();
        return (cmd, args)
    },
    
    handle: function (channel, cmd, args) {
        if (cmd === 'echo' ) {
            // response to chat
            client.say(channel, `@${context.username}, you said: "${args.join(' ')}"`);
        }
    }    
};

