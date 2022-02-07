const Eris = require("eris");
const keepAlive = require("./server");
keepAlive();

const bot = new Eris(process.env.OTQwMjg0NzUzMzAxNjA2NTEw.YgFK3g.syE2DYQCG05aH-NUWyLY-Csh98k);

bot.connect();
