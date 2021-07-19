
module.exports = {

    /**
     * parse arg and commands
     * @param {*} msg 
     * @returns [cmd, args]
     */
    parseCmdArg: function (msg) {
        const args = msg.slice(1).split(' ');
        const cmd = args.shift().toLowerCase();
        return [cmd, args];
    }
    
};

