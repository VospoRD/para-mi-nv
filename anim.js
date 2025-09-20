// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "holaaa mi amor", time: 1 },
  { text: "te escribo por aqui para que sepas que te amo mucho", time: 5 },
  { text: "gracias por estar en los dias que mas te necesite", time: 10 },
  { text: "ahora es mi turno de estar para ti", time: 15 },
  { text: "hice esto con muuuuuuchooooo amor", time: 20 },
  { text: "para ti", time: 25 },
  { text: "Quiero que sepas que eres lo mejor que me ha pasado  ", time: 30},
  { text: "aun recuerdo la primera vez que hablamos lo natural que fue", time: 35 },
  { text: "me senti realmente bien en ese momento", time: 40 },
  { text: "se sintio como si ya nos conociamos de antes", time: 45 },
  { text: "yo que ya venia dañado de una experiencia anterior", time: 50 },
  { text: "realmente me ayudo mucho", time: 55 },
  { text: "te amo, con todo mi ser", time: 60 },
  { text: "y espero un dia ser capaz de vivir contigo", time: 65 },
  { text: "y formar nuestra familia", time: 70 },
  { text: "se que aveces las cosas son dificiles", time: 75 },
  { text: "pero creo que podemos superarlas juntas", time: 80 },
  { text: "y lograr nuestras metas", time: 85 },
  { text: "te amo", time: 90 },
  { text: "gracias por estar conmigo", time: 95 },
  { text: "gracias por escucharme", time: 100 },
  { text: "gracias por amarme", time: 105 },
  { text: "te juro que te dare todo el amor y el cariño que tenga", time: 110 },
  { text: "te amo", time: 115 },
  { text: "com amor:", time: 120 },
  { text: "William", time: 125 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 5
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);