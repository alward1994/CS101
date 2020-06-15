process.env["NTBA_FIX_319"]=1;

const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
const app = express();

const Agent = require('socks5-https-client/lib/Agent');
require('dotenv').config();

process.env["TELEGRAM_API_TOKEN"] = process.env.BOT_TOKEN;
process.env["PROXY_SOCKS_HOST"] = '127.0.0.1';
process.env["PROXY_SOCKS_PORT"] = '9150';

const PORT = process.env.PORT || 3000;

const bot = new TelegramBot(process.env.TELEGRAM_API_TOKEN, {
    polling: true,
    request: {
        agentClass: Agent,
        agentOptions: {
            socksHost: process.env.PROXY_SOCKS_HOST,
            socksPort: parseInt(process.env.PROXY_SOCKS_PORT)
        }
    }   
});

// bot.on('message', (msg) => {
//     bot.sendMessage(msg.chat.id, "Yo from server");
// });

bot.onText(/\/hello/, (msg, match) => {
    bot.sendMessage(msg.chat.id, "Hello");
});

bot.onText(/\/hw ([0-9]{1,2})/, (msg, match) => {
    let text = `Type:\n <a href="/yo">/yo</a> to greet bot \n <a href="/hello">/yo</a> to greet again`;
    bot.sendMessage(msg.chat.id, text, {"parse_mode": "HTML"});
    //console.log(match[0], match[1]);
});

// bot.onText(/\/hw([0-9]{1,2})/ ,(msg,match) =>{
//     bot.sendMessage(msg.chat.id, "ter");
//     console.log(match[0],match[1]);
// });

app.listen(PORT, () => {
    console.log("App is running on port: " + PORT);
});
