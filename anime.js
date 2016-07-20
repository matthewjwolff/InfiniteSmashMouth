(() => {
  var context = new AudioContext()
  var source = context.createBufferSource()
  var request = new XMLHttpRequest()
  request.open('GET', './allstar.mp3', true)
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
  request.send()
})()
