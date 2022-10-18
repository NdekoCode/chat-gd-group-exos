import http from "http";
import url from "url";
import fs from "fs";
// Création serveur
const serveur = http.createServer(function (req, res) {
  const url_parts = url.parse(req.url);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,POST,DELETE,PUT,PATCH,OPTIONS"
  );
  if (url_parts.pathname == "/" && req.method === "GET") {
    fs.readFile("./messages.json", function (err, data) {
      if (err) console.log(err);
      res.end(data);
    });
  } else if (req.method === "POST") {
    const dataMessages = [];
    req.on("data", (chunk) => {
      dataMessages.push(chunk);
    });
    req.on("end", () => {
      fs.writeFile("./messages.json", dataMessages.toString(), (err) => {
        if (err) return err;
      });
      console.log("Data: ", dataMessages);
    });

    res.end();
  }
});
serveur.listen(9000, "localhost");
console.log("serveur prêt à écouter au port 9000");
