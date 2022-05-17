"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_telegram_bot_api_1 = __importDefault(require("node-telegram-bot-api"));
const bot = new node_telegram_bot_api_1.default(process.env.TOKEN);
bot.startPolling({ polling: true });
bot.onText(/\/start/, (message, metadata) => {
    var _a;
    let name = (_a = message.from) === null || _a === void 0 ? void 0 : _a.last_name;
    bot.sendMessage(message.chat.id, 'Salom' + name + '!');
});
bot.onText(/\/info/, (message, metadata) => {
    var _a;
    let name = (_a = message.from) === null || _a === void 0 ? void 0 : _a.last_name;
    bot.sendMessage(message.chat.id, 'Salom' + name + '!');
});
