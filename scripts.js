// Javascript-fil

//Funksjon for "Jeg vil vite mer"-knappen på forsiden
function visHistorie() {
      var http = require('http');
    http.createServer(function (req, res) {
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('Hello World\n');
    }).listen(1337, "127.0.0.1");
    console.log('Server running at http://127.0.0.1:1337/');

  var x = document.getElementById("historie");
  var y = document.getElementById("historieKnapp");
  if (x.style.display === "none") {
    x.style.display = "block";
    y.innerText = "Skjul teksten↑";
  } else {
    x.style.display = "none";
    y.innerText = "Jeg vil vite mer!";
  }
}
