var player;

function init() {
  player = new Tone.Player("https://mwolff3.github.io/InfiniteSmashMouth/edge.mp3").toMaster();
  player.loop = true;
  Tone.Buffer.onload = function() {player.start()};
}
