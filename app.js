const express = require("express");
const path = require("path");
const app = express();
var cors = require("cors");
const port = 3000;

const list = require("./json/chat_list.json");
const data = require("./json/data.json");

app.use(express.static(path.join(__dirname, "assets")));
// Middleware для обработки JSON
app.use(express.json());
app.use(cors());

// Обработка GET запроса
app.get("/", (req, res) => {
  res.json(list["chat-list"]);
});

app.get("/room_1", (req, res) => {
  res.json(list["cabinet-chat-message-show-room_1"]);
});

app.get("/room_2", (req, res) => {
  res.json(list["cabinet-chat-message-show-room_2"]);
});

app.get("/room_3", (req, res) => {
  res.json(list["cabinet-chat-message-show-room_3"]);
});

app.get("/room_4", (req, res) => {
  res.json(list["cabinet-chat-message-show-room_4"]);
});

app.get("/room_5", (req, res) => {
  res.json(list["cabinet-chat-message-show-room_5"]);
});

app.post("/search", (req, res) => {
  const searchData = req.body.search;
  res.json(data);
});

// Слушаем порт
app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
