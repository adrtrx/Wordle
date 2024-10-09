function construirTablero() {
  const tablero = document.getElementById("tablero");

  // Vamos a construir las cajitas
  for (let i = 0; i < 5; i += 1) {
    let fila = document.createElement("div");
    fila.className = "fila"; //<div class="fila"></div>

    for (let j = 0; j < 5; j += 1) {
      let cajita = document.createElement("div");
      cajita.className = "caja"; //<div class="caja"></div>
      fila.appendChild(cajita); //<div class="fila"><div class="caja"></div>
    }

    tablero.appendChild(fila);
  }
}

function construirTeclado() {
  const teclado = document.getElementById("teclado");
  const letras = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ñ"],
    ["Del", "Z", "X", "C", "V", "B", "N", "M", "Enter"],
  ];

  for (let i = 0; i < 3; i++) {
    let fila = document.createElement("div");
    fila.className = "fila-letras";
    for (let j = 0; j < letras[i].length; j++) {
      let boton = document.createElement("button");
      boton.innerHTML = letras[i][j];
      fila.appendChild(boton);
    
    }
    teclado.appendChild(fila);
  }
}

construirTablero();
construirTeclado();
