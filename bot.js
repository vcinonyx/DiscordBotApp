
const Discord = require("discord.js")
const client = new Discord.Client({
  partials: ["MESSAGE"]
})

const BOT_PREFIX = "!"
const MOD_ME_COMMAND = "mod-me"
const CLEAR_COMMAND = "clear"
const HEADS_OR_TAILS_COMMAND ="heads"

client.on("message", msg => {
      if (msg.content == "I love teorver") {
       msg.react("❤️")
    }

  if (msg.content === `${BOT_PREFIX}${MOD_ME_COMMAND}`) {
    modUser(msg.member)
  }

  if(msg.content.includes(`${BOT_PREFIX}${CLEAR_COMMAND}`)) {
    clear(msg);
  }

  if(msg.content === `${BOT_PREFIX}${HEADS_OR_TAILS_COMMAND}`){
    heads_or_tails(msg);
  }
})


function heads_or_tails(mess) {
  mess.channel.send('Монета подбрасывается...')

  var random = Math.floor(Math.random() * 4) + 1; // Объявление переменной random - она вычисляет случайное число от 1 до 3

  if (random === 1) { // Если вычислено число 1, то выпадает орёл.
    mess.channel.send(':full_moon: Орёл!')
  } else if (random === 2) { // Если вычислено число 2, то выпадает решка.
    mess.channel.send(':new_moon: Решка!') 
  } else if (random === 3) { // Если вычислено число 3, то монета падает ребром.
    mess.channel.send(':last_quarter_moon: Монета упала ребром!')
}
}


function modUser(member) {
  member.roles.add("783084095223234590")
}




function clear(mess) { // Создание новой функции с командой
  const arggs = mess.content.split(' ').slice(1);
  const amount = arggs.join(' ');
  
  if (!amount) return mess.channel.send('Вы не указали, сколько сообщений нужно удалить!'); 
  if (isNaN(amount)) return mess.channel.send('Это не число!'); 
 
  if (amount > 100) return mess.channel.send('Вы не можете удалить 100 сообщений за раз');
  if (amount < 1) return mess.channel.send('Вы должны ввести число больше чем 1');
  
    async function delete_messages() {
      await mess.channel.messages.fetch({ limit: amount }).then(messages => {
          mess.channel.bulkDelete(messages)
          mess.channel.send(`Удалено ${amount} сообщений!`)
      })};  
      delete_messages(); 
 }

 client.login(process.env.token)

