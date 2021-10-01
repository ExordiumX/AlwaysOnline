const Eris = require("eris");
const keepAlive = require("./server");
keepAlive();

const bot = new Eris(process.env.TOKEN);

bot.connect();
