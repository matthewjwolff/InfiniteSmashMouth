function init() {
  var player = new Tone.Player().toMaster();
  player.loop = true;
  player.buffer = new Tone.Buffer("https://mwolff3.github.io/InfiniteSmashMouth/edge/edge.mp3",function() {player.start();});
}
