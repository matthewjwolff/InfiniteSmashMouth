var player;

function init() {
  player = new Tone.Player().toMaster();
  player.loop = true;
  player.buffer = new Tone.Buffer("https://mwolff3.github.io/InfiniteSmashMouth/edge/edge.mp3");
  Tone.Buffer.onload = function() {player.start()};
}
