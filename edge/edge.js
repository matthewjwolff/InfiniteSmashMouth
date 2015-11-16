var player;

function init() {
  player = new Tone.Player().toMaster();
  player.loop = true;
  player.buffer = new Tone.AudioBuffer("https://mwolff3.github.io/InfiniteSmashMouth/edge/edge.mp3",function() {
    player.toMaster();
    player.start();
  });
}
