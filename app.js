const express = require("express");
const app = express();
var cors = require("cors");
const port = 3000;

const data = require("./json/chat_list.json");

// Middleware для обработки JSON
app.use(express.json());
app.use(cors());

// Обработка GET запроса
app.get("/", (req, res) => {
  res.json(data["chat-list"]);
});

app.get("/room_1", (req, res) => {
  res.json(data["cabinet-chat-message-show-room_1"]);
});

app.get("/room_2", (req, res) => {
  res.json(data["cabinet-chat-message-show-room_2"]);
});

app.get("/room_3", (req, res) => {
  res.json(data["cabinet-chat-message-show-room_3"]);
});

app.get("/room_4", (req, res) => {
  res.json(data["cabinet-chat-message-show-room_4"]);
});

// Слушаем порт
app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
