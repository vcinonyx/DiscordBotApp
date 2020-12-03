require("dotenv").config()

const Discord = require("discord.js")
const client = new Discord.Client({
  partials: ["MESSAGE"]
})

const BOT_PREFIX = "!"
const MOD_ME_COMMAND = "mod-me"
const CLEAR_COMMAND = "clear"


client.on("message", msg => {
      if (msg.content == "I love teorver") {
       msg.react("❤️")
    }

  if (msg.content === `${BOT_PREFIX}${MOD_ME_COMMAND}`) {
    modUser(msg.member)
  }

  if(msg.content === `${BOT_PREFIX}${CLEAR_COMMAND}`) {
    clear(msg);
  }

})



function modUser(member) {
  member.roles.add("783084095223234590")
}

// function clear(mess) { // Создание новой функции с командой

//   const arggs = mess.content.split(' ').slice(1);
 
//   const amount = arggs.join(' ');
  
//   if (!amount) return mess.channel.send('Вы не указали, сколько сообщений нужно удалить!'); 
 
//   if (isNaN(amount)) return mess.channel.send('Это не число!'); 
 
//    if (amount > 100) return mess.channel.send('Вы не можете удалить 100 сообщений за раз');
//    if (amount < 1) return mess.channel.send('Вы должны ввести число больше чем 1');
         
//          async function delete_messages() {
 
//          await mess.channel.messages.fetch({ limit: amount }).then(messages => {
//              mess.channel.bulkDelete(messages)
//              mess.channel.send(`Удалено ${amount} сообщений!`)
//          })};
//          delete_messages(); 
//  }

client.login(process.env.BOT_TOKEN)

