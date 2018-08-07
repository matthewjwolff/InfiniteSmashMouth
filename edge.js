var player;

function init() {
  player = new Tone.Player("edge.mp3").toMaster();
  player.loop = true;
  Tone.Buffer.onload = function() {player.start()};
}
