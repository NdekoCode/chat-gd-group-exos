import http from "http";
import url from "url";
import fs from "fs";
const fs = require("fs");
import { unescape } from "querystring";
//stockage
const messages = ["testing"];
const clients = [];
// Création serveur
const serveur = http.createServer(function (req, res) {
  const url_parts = url.parse(req.url);
  if (url_parts.pathname == "/") {
    fs.readFile("./index.html", function (err, data) {
      if (err) console.log(err);
      res.end(data);
    });
  } else if (url_parts.pathname.substring(0, 5) == "/poll") {
    const count = url_parts.pathname.replace(/[^0-9]*/, "");
    console.log(count);
    if (messages.length > count) {
      res.end(
        JSON.stringify({
          count: messages.length,
          append: messages.slice(count).join("\n") + "\n",
        })
      );
    } else {
      clients.push(res);
    }
  } else if (url_parts.pathname.substring(0, 5) == "/msg/") {
    let msg = unescape(url_parts.pathname.substring(5));
    messages.push(msg);
    while (clients.length > 0) {
      let client = clients.pop();
      client.end(
        JSON.stringify({
          count: messages.length,
          append: msg + "\n",
        })
      );
    }
    res.end();
  }
});
serveur.listen(9000, "localhost");
console.log("serveur prêt à écouter au port 9000");
