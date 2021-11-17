// Javascript-fil

//Funksjon for "Jeg vil vite mer"-knappen på forsiden
function visHistorie() {
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
