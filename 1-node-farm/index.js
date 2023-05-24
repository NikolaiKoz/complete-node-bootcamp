const fs = require("fs");
const http = require("http");
const url = require("url");

/////////////////////////
// FIles
//Codigo bloqueandte y sincronico
// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
// console.log(textIn);

// const textOut = `This is what we know about the advocado: ${textIn}.\nCreated on ${Date.now()}`;
// fs.writeFileSync('./txt/output.txt', textOut);
// console.log('File written!');

//Codigo NO bloqueante y Asincronico.
// fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
//   if (err) return console.log("ERROR 🦖");
//   fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
//     console.log(`data2: ${data2}`);
//     fs.readFile(`./txt/append.txt`, "utf-8", (err, data3) => {
//       console.log(`data3: ${data3}`);

//       fs.writeFile(
//         "./txt/final.txt",
//         `${data2}\n\n\n${data3}`,
//         "utf-8",
//         (err) => {
//           console.log("Your file has been written 😄");
//         }
//       );
//     });
//   });
// });

// console.log("Will read file");

/////////////////////////
// Server
const server = http.createServer((req, res) => {
  console.log(req.url);

  const pathName = req.url;

  if (pathName === "/" || pathName === "/overview") {
    res.end("This is the Overview");
  } else if (pathName === "/product") {
    res.end("This is the Products");
  } else {
    res.writeHead(404, {
      'Content-type': 'text/html',
      'my-own-header': 'gello-world'
    });
    res.end("<h1>Page not found!</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to request on port 8000");
});
