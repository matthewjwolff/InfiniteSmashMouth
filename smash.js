function init() {	
	buffer = new Tone.Buffer("https://matthewjwolff.github.io/InfiniteSmashMouth/allstar.mp3", function(){
		meme();
	});
}

var buffer; 

function meme() {
	var player = new Tone.Player().toMaster();
	player.buffer = buffer;
	player.start();
	setTimeout(meme, 9220);
}
