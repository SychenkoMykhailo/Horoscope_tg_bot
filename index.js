import horoscopeAPI from "./API/horoscopeAPI.js";
import zodiacs from "./zodiacs/zodiacs.js";
import defineZodiac from "./functions/defineZodiac.js";
import checkValid from "./functions/checkValid.js";

import TelegramAPI from "node-telegram-bot-api";

let port = process.env.PORT || 8443;
let host = process.env.HOST;
const token = "1835520992:AAEZ_nN7bOjggs4ZhIfoS2hC_-QJI3wHAlE";
const bot = new TelegramAPI(token, { polling: true, port: port, host: host });
const start = () => {
  bot.setMyCommands([{ command: "/start", description: "Greeting and info" }]);
  bot.on("message", async (msg) => {
    const text = msg.text;
    const chatId = msg.chat.id;
    if (text === "/start") {
      return bot.sendMessage(
        chatId,
        `Welcome, ${msg.from.first_name} ${msg.from.last_name}!\nSend me your date of birth to get horoscope`
      );
    }
    if (checkValid(text)) {
      return horoscopeAPI(defineZodiac(text, zodiacs)).then(
        ({ header, description, img }) => {
          bot
            .sendMessage(
              chatId,
              `${header}\nYour horoscope for today:\n${description}`
            )
            .then(bot.sendSticker(chatId, img));
        }
      );
    }
    return bot.sendMessage(chatId, "Please, type correct date of birth");
  });
};
start();
