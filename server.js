/****
 * tmijs
 * https://github.com/tmijs/tmi.js
 * 
 * doc
 * https://github.com/tmijs/docs/tree/gh-pages/_posts
 * 
 * follow by
 * https://spacejelly.dev/posts/how-to-create-a-twitch-chat-bot-with-node-js-tmi-js-heroku/
 *  
 */


require('dotenv').config();
const commands = require('./commands');
const tmi = require('tmi.js')

const client = new tmi.Client({
    connection: {
        reconnect: true
    },
    channels: [
        'sugerfree8570'
    ],
    identity: {
        username: process.env.TWITCH_BOT_USERNAME,
        password: process.env.TWITCH_ACCESS_TOKEN
      }
});

client.connect();

client.on('message', async (channel, context, message, self) => {

    // ignore self message, prevent INF loop
    if (self) return;

    // client.say(channel, `hi! @${context.username} 晚上好RR `);

    // ignore not command message (start with !)
    if (!message.startsWith('!')) return;

    commands.handle(channel, commands.parseCmdArg(message) );

});



