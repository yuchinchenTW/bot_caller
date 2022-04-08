"use strict";
const keepAlive = require('./server');
let {
  Client,
  Intents,
  Bot
} = require('discord.js');
const {
  token
} = process.env.DISCORD_TOKEN // use the require method

const client = new Client({
  intents: [Intents.FLAGS.GUILDS]
});
var cron = require("cron");
/** 
*/



function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
keepAlive()
client.login(token);
//console.log("reach")
client.once('ready', () => {
console.log(`Logged in as ${client.user.tag}!`);
console.log(client.channels.cache.get("345038542285832193").send("start"));
})



client.on("message", async msg => {
if (msg.content === 'ping') {
msg.channel.send("幽暗");
}
if (msg.content === 'start') {

 msg.channel.send("-start");

//let scheduledMessage = new cron.CronJob('0 0 * * 5', () => {
  // This runs every day at 10:30:00, you can do anything you want
  //msg.channel.send("123");
//});
  let cronTime='* * * * * *'
  const job = new cron.CronJob({
    cronTime,
    onTick: async () => {
      if (job.taskRunning) {
        return
      }

      job.taskRunning = true
      try {
        await Tasks()
      } catch (err) {
        // Handle error
      }
      job.taskRunning = false
    },
    start: true,
    timeZone: 'UTC'
  })
 

// When you want to start it, use:
job.start()
}
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
} 
let count =getRandomInt(26);
count=0;
let Tasks=async function(){
while(count>-1){
  console.log(count);
switch (count){

case 0:
for(let i=0;i<3;i++){
await msg.channel.send("雙總物");
await sleep(10000);
}
await sleep(120000);
count++;
break;
case 1:
for(let i=0;i<3;i++){
await msg.channel.send("雙總魔");
await sleep(10000);
}
await sleep(120000);
count++;
break;
case 2:
for(let i=0;i<3;i++){
await msg.channel.send("乾淨滅龍");
await sleep(10000);
}
await sleep(150000);
count++;
break;
case 3:
for(let i=0;i<3;i++){
await msg.channel.send("幽暗");
await sleep(10000);
}
await sleep(90000);
count++;
break;
case 4:
for(let i=0;i<3;i++){
await msg.channel.send("輪迴");
await sleep(10000);
}
await sleep(300000);
count++;
break;
case 5:
for(let i=0;i<3;i++){
await msg.channel.send("艾戒");
await sleep(10000);
}
await sleep(150000);
count++;
break;
case 6:
for(let i=0;i<3;i++){
await msg.channel.send("苦行");
await sleep(10000);
}
await sleep(90000);
count++;
break;
case 7:
for(let i=0;i<3;i++){
await msg.channel.send("燃燒戒指");
await sleep(10000);
}
await sleep(150000);
count++;
break;
case 8:
for(let i=0;i<3;i++){
await msg.channel.send("黑翼");
await sleep(10000);
}
await sleep(120000);
count++;
break;
case 9:
for(let i=0;i<3;i++){
await msg.channel.send("乾淨天上");
await sleep(10000);
}
await sleep(150000);
count++;
break;
case 10:
for(let i=0;i<3;i++){
await msg.channel.send("武公寶珠");
await sleep(10000);
}
await sleep(150000);
count++;
break;
case 11:
for(let i=0;i<3;i++){
await msg.channel.send("20星");
await sleep(10000);
}
await sleep(150000);
count++;
break;
case 12:
for(let i=0;i<3;i++){
await msg.channel.send("19星");
await sleep(10000);
}
await sleep(150000);
count++;
break;
case 13:
for(let i=0;i<3;i++){
await msg.channel.send("小筱");
await sleep(10000);
}
await sleep(150000);
count++;
break;
case 14:
for(let i=0;i<3;i++){
await msg.channel.send("內面耀光");
await sleep(10000);
}
await sleep(150000);
count++;
break;
case 15:
for(let i=0;i<3;i++){
await msg.channel.send("雙終物");
await sleep(10000);
}
await sleep(90000);
count++;
break;
case 16:
for(let i=0;i<3;i++){
await msg.channel.send("雙終魔");
await sleep(10000);
}
await sleep(90000);
count++;
break;
case 17:
for(let i=0;i<3;i++){
await msg.channel.send("精靈墜飾");
await sleep(10000);
}
await sleep(90000);
count++;
break;
case 18:
for(let i=0;i<3;i++){
await msg.channel.send("戰男");
await sleep(10000);
}
await sleep(150000);
count++;
break;
case 19:
for(let i=0;i<3;i++){
await msg.channel.send("戰女");
await sleep(10000);
}
await sleep(150000);
count++;
break;
case 20:
for(let i=0;i<3;i++){
await msg.channel.send("露耳");
await sleep(10000);
}
await sleep(150000);
count++;
break;
case 21:
for(let i=0;i<3;i++){
await msg.channel.send("口紅");
await sleep(10000);
}
await sleep(90000);
count++;
break;
case 22:
for(let i=0;i<3;i++){
await msg.channel.send("眼罩");
await sleep(10000);
}
await sleep(90000);
count++;
break;
case 23:
for(let i=0;i<3;i++){
await msg.channel.send("女武神");
await sleep(10000);
}
await sleep(150000);
count++;
break;
case 24:
for(let i=0;i<3;i++){
await msg.channel.send("p寵");
await sleep(10000);
}
await sleep(150000);
count++;
break;
case 25:
for(let i=0;i<3;i++){
await msg.channel.send("幣值");
await sleep(10000);
}
await sleep(120000);
count++;
break;
default:
    //count++;
    if(count>25) {
      count=0;
      await sleep(600000);
    }

//await msg.channel.send("start");
}
}
}
if (msg.content === '!logout') {

  //msg.channel.send("logout4");
  channel.send('Resetting...')
    .then(msg => client.destroy())
    .then(() => client.login(token));
}

})


