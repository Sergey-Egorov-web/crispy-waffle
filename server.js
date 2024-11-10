const http = require("http");

let requestCounter = 0;

const server = http.createServer((request, response) => {
  if (request.url === "/") {
    requestCounter++;
    response.write("SEW" + requestCounter);
    response.end();
  } else {
    // Если запрос идет на другой URL, возвращаем пустой ответ
    response.writeHead(204); // 204 No Content
    response.end();
  }
});

server.listen(3003);

// setInterval(() => {
//   counter++;
//   console.log(counter);
// }, 1000);
