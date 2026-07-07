const fs = require("fs");
const path = require("path");
const http = require("http");

const indexPath = path.join(__dirname, "public", "index.html");

const coffeeMenu = [
  { id: 1, name: "Kumbakonam Degree Coffee", priceInr: 45 },
  { id: 2, name: "Strong Filter Coffee", priceInr: 40 },
  { id: 3, name: "Jaggery Filter Coffee", priceInr: 50 }
];

function sendJson(res, statusCode, payload) {
  res.writeHead(statusCode, { "Content-Type": "application/json; charset=utf-8" });
  res.end(JSON.stringify(payload));
}

function createApp() {
  return http.createServer((req, res) => {
    if (req.url === "/api/menu" && req.method === "GET") {
      return sendJson(res, 200, { items: coffeeMenu });
    }

    if (req.url === "/" && req.method === "GET") {
      fs.readFile(indexPath, "utf8", (error, data) => {
        if (error) {
          return sendJson(res, 500, { error: "Unable to load page" });
        }

        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.end(data);
      });
      return;
    }

    sendJson(res, 404, { error: "Not Found" });
  });
}

module.exports = { createApp };
