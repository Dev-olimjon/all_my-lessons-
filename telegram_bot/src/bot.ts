import TelegramBot from "node-telegram-bot-api";
const bot = new TelegramBot(process.env.TOKEN!)
bot.startPolling({polling:true})

bot.onText(/\/start/,(message,metadata)=>{
  let name = message.from?.last_name
  bot.sendMessage(message.chat.id,'Salom'+ name +'!')
})

bot.onText(/\/info/,(message,metadata)=>{
  let name = message.from?.last_name
  bot.sendMessage(message.chat.id,'Salom'+ name +'!')
})