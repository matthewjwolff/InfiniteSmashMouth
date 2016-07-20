(() => {
  var context = new AudioContext()
  var source = context.createBufferSource()
  var request = new XMLHttpRequest()
  request.open('GET', 'http://mwolff3.github.io/InfiniteSmashMouth/anime.js', true)
  request.responseType = 'arraybuffer'
  request.onload = () => {
    var audioData = request.response
    context.decodeAudioData(audioData, (buffer) => {
      source.buffer = buffer
      source.connect(context.destination)
      source.loop=true
      source.detune.value = 1000
      source.start()
    })
  }
})()
